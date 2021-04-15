import { makeAutoObservable, reaction, runInAction } from "mobx";
import agent from "../api/agent";
import { IGroup } from "../api/models/group";
import { IPagination, PagingParams } from "../api/models/paginations";

export default class  GroupStore {
  loading = false;
  loadingInitial = false;
  selectedGroup: IGroup | undefined = undefined;
  groupsRegystry = new Map<string, IGroup>();
  pagination: IPagination | null = null;
  pagingParams = new PagingParams();
  predicate = new Map().set('all', true);

  constructor() {
    makeAutoObservable(this);

    reaction(
      () => this.predicate.keys(),
      () => {
        this.pagingParams = new PagingParams();
        this.clearGroups();
        this.loadGroups();
      }
    );
  }
  
  setPagination = (pagination: IPagination): void => {
    this.pagination = pagination;
  }

  setPagingParams = (pagingParams: PagingParams) => {
    this.pagingParams = pagingParams;
  }

  setPredicate = (predicate: string, value: string) => {
    const resetPredicate = () => {
      this.predicate.forEach((value, key) => this.predicate.delete(key));
    }

    switch (predicate) {
      case 'all':
        resetPredicate();
        this.predicate.set(predicate, value);
        break;
      case 'label':
        resetPredicate();
        this.predicate.set(predicate, value);
        break;
    }
  }

  clearGroups = () => {
    this.groupsRegystry.clear();
  }

  loadGroups = async () => {
    this.loadingInitial = true;
    try {
      const result = await agent.Groups.list(this.axiosParams);

      result.data.forEach(g => {
        runInAction(() => {
          this.groupsRegystry.set(g.id, g);
        });
      });
      this.setPagination(result.pagination);
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

  get axiosParams() {
    const params = new URLSearchParams();

    params.append('pageNumber', this.pagingParams.pageNumber.toString());
    params.append('pageSize', this.pagingParams.pageSize.toString());
    this.predicate.forEach((value, key) => params.append(key, value));
    return (params);
  }

  private getGroup = (id: string) => {
    return this.groupsRegystry.get(id);
  }
}