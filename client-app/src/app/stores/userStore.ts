import { makeAutoObservable } from "mobx";
import agent from "../api/agent";
import { IUser, IUserForm } from "../api/models/user";
import { store } from "./store";
import { history } from '../../index'

export default class  UserStore {
  user: IUser | null = null;
  loading: boolean = false;

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
      this.setUser(user);
      history.push('/groups');
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
  }

  getUser = async () => {
    try {
      const user = await agent.Account.current();
      
      this.setUser(user);
    } catch (error) {
      console.log(error);
    }
  }
  
  get isLoggedIn() {
    return (!!this.user);
  }
}