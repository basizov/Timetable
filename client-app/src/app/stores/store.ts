import { createContext, useContext } from "react";
import CommonStore from "./commonStore";
import PostStore from "./postStore";

interface IStore {
  postStore: PostStore;
  commonStore: CommonStore;
}

export const  store: IStore = {
  postStore: new PostStore(),
  commonStore: new CommonStore()
}

export const  StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}