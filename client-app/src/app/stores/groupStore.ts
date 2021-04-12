import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { IGroup } from "../api/models/Group";

export default class  GroupStore {
  loading = false;
  loadingInitial = false;
  selectedGroup: IGroup | undefined = undefined;
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

  loadGroup = async (id: string) => {
    this.loading = true;
    let group = this.getGroup(id);

    if (group) {
      this.selectedGroup = group;
      this.loading = false;
    } else {
      try {
        group = await agent.Groups.details(id);

        runInAction(() => {
          this.groupsRegystry.set(group!.id, group!)
          this.selectedGroup = group;
          this.loading = false;
        });
      } catch(error) {
        console.log(error);
        this.loading = false;
      }
    }
  }
  
  get getGroups(): IGroup[] {
    return Array.from(this.groupsRegystry.values());
  }

  private getGroup = (id: string) => {
    return this.groupsRegystry.get(id);
  }
}