import axios, { AxiosResponse } from "axios";
import { store } from "../stores/store";
import { IGroup } from "./models/group";
import { PaginatedResult } from "./models/paginations";
import { IUser, IUserForm } from "./models/user";

const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.request.use(config => {
  const token = store.commonStore.token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return (config);
})
axios.interceptors.response.use(async response => {
  await sleep(1000);
  const pagination = response.headers['pagination'];

  if (pagination) {
    response.data = new PaginatedResult(response.data, JSON.parse(pagination));
    return response as AxiosResponse<PaginatedResult<any>>;
  }
  return response;
}, (error) => {
  console.log(error);
  return Promise.reject(error);
});

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody)
}

const Groups = {
  list: (params: URLSearchParams) => axios.get<PaginatedResult<IGroup[]>>('/group', {params}).then(responseBody),
  details: (id: string) => requests.get<IGroup>(`/group/${id}`)
}

const Account = {
  current: () => requests.get<IUser>('/account'),
  login: (user: IUserForm) => requests.post<IUser>('/account/login', user),
}

const agent = {
  Groups,
  Account
}

export default agent;