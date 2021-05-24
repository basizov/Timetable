import { makeAutoObservable } from "mobx";
import agent from "../api/agent";
import { IUser, IUserForm } from "../api/models/user";
import { store } from "./store";
import { history } from '../../index'

export default class  UserStore {
  user: IUser | null = null;
  loading: boolean = false;
  refreshTokenTimeout: any;

  constructor() {
    makeAutoObservable(this);
  }
  
  setLoading = (value: boolean) => this.loading = value;
  setUser = (value: IUser | null) => this.user = value;

  login = async (creds : IUserForm) => {
    this.setLoading(true);
    try {
      const user = await agent.Account.login(creds);

      store.commonStore.setToken(user.token);
      this.startRefreshTokenTimer(user);
      this.setUser(user);
      history.push('/news');
    } catch (error) {
      throw error;
    } finally {
      this.setLoading(false);
    }
  }
  logout = () => {
    store.commonStore.setToken(null);
    window.localStorage.removeItem('jwt');
    this.user = null;
    history.push('/');
    store.groupsStore.clearGroups();
    store.postStore.clearPosts();
  }
  getUser = async () => {
    try {
      const user = await agent.Account.current();
      
      store.commonStore.setToken(user.token);
      this.setUser(user);
      this.startRefreshTokenTimer(user);
    } catch (error) {
      console.log(error);
    }
  }
  refreshToken = async () => {
    this.stopRefreshTokenTimer();
    try {
      const user = await agent.Account.refreshToken();
      
      this.setUser(user);
      store.commonStore.setToken(user.token);
      this.startRefreshTokenTimer(user);
    } catch (error) {
      console.log(error);
    }
  }
  
  get isLoggedIn() {
    return (this.user);
  }

  private startRefreshTokenTimer = (user: IUser) => {
    const jwtToken = JSON.parse(atob(user.token.split('.')[1]));
    const expires = new Date(jwtToken.exp * 1000);
    const timeout = expires.getTime() - Date.now() - (60 * 1000);

    this.refreshTokenTimeout = setTimeout(this.refreshToken, timeout);
  }
  private stopRefreshTokenTimer = () => {
    clearTimeout(this.refreshTokenTimeout);
  }
}