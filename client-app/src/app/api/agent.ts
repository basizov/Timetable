import axios, { AxiosResponse } from "axios";
import { IGroup } from "./models/Group";

const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.response.use(response => {
  return sleep(1000).then(() => {
    return response;
  }).catch(error => {
    console.log(error);
    return Promise.reject(error);
  });
})

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody)
}

const Groups = {
  list: () => requests.get<IGroup[]>(`/group`)
}

const agent = {
  Groups
}

export default agent;