import { createContext, useContext } from "react";
import CommentStore from "./commentStore";
import CommonStore from "./commonStore";
import FileStore from "./fileStore";
import GroupsStore from "./groupsStore";
import PostStore from "./postStore";
import UserStore from "./userStore";

interface IStore {
  postStore: PostStore;
  commonStore: CommonStore;
  userStore: UserStore;
  fileStore: FileStore;
  groupsStore: GroupsStore;
  commentStore: CommentStore;
}

export const  store: IStore = {
  postStore: new PostStore(),
  commonStore: new CommonStore(),
  userStore: new UserStore(),
  fileStore: new FileStore(),
  groupsStore: new GroupsStore(),
  commentStore: new CommentStore()
}

export const  StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}