import axios, { AxiosResponse } from "axios";
import { IGroup } from "./models/group";
import { PaginatedResult } from "./models/paginations";

const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

axios.defaults.baseURL = 'http://localhost:5000/api';

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
}

const Groups = {
  list: (params: URLSearchParams) => axios.get<PaginatedResult<IGroup[]>>('/group', {params}).then(responseBody),
  details: (id: string) => requests.get<IGroup>(`/group/${id}`)
}

const agent = {
  Groups
}

export default agent;