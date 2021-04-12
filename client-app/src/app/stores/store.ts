import { createContext, useContext } from "react";
import GroupStore from "./groupStore";

interface IStore {
  groupStore: GroupStore
}

export const  store: IStore = {
  groupStore: new GroupStore()
}

export const  StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}