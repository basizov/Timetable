import { createContext, useContext } from "react";
import CommonStore from "./commonStore";
import PostStore from "./postStore";
import UserStore from "./userStore";

interface IStore {
  postStore: PostStore;
  commonStore: CommonStore;
  userStore: UserStore;
}

export const  store: IStore = {
  postStore: new PostStore(),
  commonStore: new CommonStore(),
  userStore: new UserStore()
}

export const  StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}