import axios, { AxiosError, AxiosResponse } from 'axios';
import { store } from '../stores/store';
import { IGroup } from './models/group';
import { PaginatedResult } from './models/pagination';
import { IPost, PostFormValues } from './models/post';
import { IUser, IUserForm } from './models/user';
import { history } from '../../index';

axios.defaults.baseURL = 'http://localhost:5000/api';

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

axios.interceptors.request.use(config => {
  const token = store.commonStore.token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return (config);
});
axios.interceptors.response.use(async response => {
  await sleep(1000);
  const pagination = response.headers['pagination'];

  if (pagination) {
    response.data = new PaginatedResult(response.data, JSON.parse(pagination));
    return response as AxiosResponse<PaginatedResult<any>>;
  }
  return response;
}, (error: AxiosError) => {
  const { data, status, config, headers } = error.response!;

  switch (status) {
    case 400:
      if (typeof data === 'string') {
        console.log(data);
      }
      if (config.method === 'get' && data.errors.hasOwnProperty('id')) {
        history.push('/not-found');
      }
      if (data.errors) {
        const modalStateErros = [];

        for (const key in data.errors) {
          if (data.errors[key]) {
            modalStateErros.push(data.errors[key]);
          }
        }
        throw modalStateErros.flat();
      }
      break;
    case 401:
      if (status === 401 && headers['www-authenticate']?.startsWith('Bearer error="invalid_token"')) {
        store.userStore.logout();
        history.push('/login');
      }
      break;
    case 404:
      history.push('/not-found');
      break;
    case 500:
      store.commonStore.setError(data);
      history.push('/server-error');
      break;
  }
  return Promise.reject(error);
});

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  delete: <T>(url: string) => axios.delete<T>(url).then(responseBody)
}

const Posts = {
  list: (params: URLSearchParams) => axios.get<PaginatedResult<IPost[]>>('/posts', {params}).then(responseBody),
  details: (id: string) => requests.get<IPost>(`/posts/${id}`),
  create: (post: PostFormValues) => {
    let formData = new FormData();

    if (post.files && post.files.length > 0) {
      const fileArray = Array.from(post.files);

      fileArray.forEach(file => formData.append('Files', file, file.name));
    }
    if (post.photos && post.photos.length > 0) {
      const photosArray = Array.from(post.photos);

      photosArray.forEach(photo => formData.append('Photos', photo, photo.name));
    }
    if (post.title) formData.append('Title', post.title);
    if (post.description) formData.append('Description', post.description);
    return axios.post<IPost>('/posts', formData, {
      headers: { 'Content-type': 'multipart/form-data' }
    }).then(responseBody);
},
}

const Account = {
  current: () => requests.get<IUser>('/account'),
  login: (user: IUserForm) => requests.post<IUser>('/account/login', user),
  refreshToken: () => requests.post<IUser>('/account/refreshToken', {})
}

const File = {
  download: (id: string) => requests.get<File>(`/files/${id}`)
}

const Groups = {
  list: (label: string) => axios.get<IGroup[]>(`/groups/?label=${label}`).then(responseBody),
  details: (id: string) => requests.get<IGroup>(`/groups/${id}`)
}

const agent = {
  Posts,
  Account,
  File,
  Groups
}

export default agent;