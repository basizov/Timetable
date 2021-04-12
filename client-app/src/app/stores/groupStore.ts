import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { IGroup } from "../api/models/Group";

export default class  GroupStore {
  loading = false;
  loadingInitial = false;
  groupsRegystry = new Map<string, IGroup>();

  constructor() {
    makeAutoObservable(this);
  }

  loadGroups = async () => {
    this.loadingInitial = true;
    try {
      const result = await agent.Groups.list();

      result.forEach(g => {
        runInAction(() => {
          this.groupsRegystry.set(g.id, g);
        });
      });
      runInAction(() => this.loadingInitial = false);
    } catch(error) {
      this.loadingInitial = false;
      console.log(error);
    }
  }
  
  get getGroups(): IGroup[] {
    return Array.from(this.groupsRegystry.values());
  }
}