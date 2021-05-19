import { makeAutoObservable } from "mobx";
import agent from "../api/agent";
import { IGroup } from "../api/models/group";

export default class  GroupsStore {
  groupRegystry = new Map<string, IGroup>();
  selectedGroup: IGroup | null = null;
  loading = false;
  
  constructor() {
    makeAutoObservable(this);
  }
  
  setLoading = (value: boolean) => this.loading = value;
  setSelectedGroup = (value: IGroup | null) => this.selectedGroup = value;

  clearGroups = () => this.groupRegystry.clear();
  
  loadGroups = async (label: string) => {
    this.setLoading(true);
    try {
      const result = await agent.Groups.list(label);

      result.forEach(group => this.setGroup(group));
    } catch(error) {
      console.log(error);
    } finally {
      this.setLoading(false);
    }
  }

  loadGroup = async (id: string): Promise<void> => {
    let group: IGroup | undefined = this.getGroup(id);

    this.setLoading(true);
    if (group) {
      this.setGroup(group);
      this.setLoading(false);
    } else {
      try {
        group = await agent.Groups.details(id);

        this.setGroup(group)
        this.setSelectedGroup(group);
      } catch(error) {
        console.log(error);
      } finally {
        this.setLoading(false);
      }
    }
  }

  
  get getGroups(): IGroup[] {
    return Array.from(this.groupRegystry.values());
  }

  private setGroup = (group: IGroup) => this.groupRegystry.set(group.id, group);
  private getGroup = (id: string) => {
    const group = this.groupRegystry.get(id);

    return (group);
  }
}