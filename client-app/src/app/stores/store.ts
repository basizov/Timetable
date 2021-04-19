import { createContext, useContext } from "react";
import CommonStore from "./commonStore";
import GroupStore from "./groupStore";
import UserStore from "./userStore";

interface IStore {
  groupStore: GroupStore,
  commonStore: CommonStore,
  userStore: UserStore
}

export const  store: IStore = {
  groupStore: new GroupStore(),
  commonStore: new CommonStore(),
  userStore: new UserStore()
}

export const  StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}