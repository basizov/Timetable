import { makeAutoObservable, reaction } from "mobx";
import { IError } from "../api/models/error";

export default class  CommonStore {
  error: IError | null = null;
  token: string | null = window.localStorage.getItem('jwt');
  appLoaded = false;

  constructor() {
    makeAutoObservable(this);

    reaction(
      () => this.token,
      token => {
        if (token) {
          window.localStorage.setItem('jwt', token);
        } else {
          window.localStorage.removeItem('jwt');
        }
      }
    );
  }
  
  setToken = (value: string | null) => this.token = value;
  setError = (value: IError | null) => this.error = value;
  setAppLoaded = () => this.appLoaded = true;
}