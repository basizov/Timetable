import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { IPagination, PagingParams } from "../api/models/pagination";
import { IPost, Post, PostFormValues } from "../api/models/post";

export default class  PostStore {
  postRegystry = new Map<string, IPost>();
  loading = false;
  pagination: IPagination | null = null;
  pagingParams = new PagingParams(1, 10);
  
  constructor() {
    makeAutoObservable(this);
  }

  setLoading = (value: boolean) => this.loading = value;
  setPagination = (value: IPagination) => this.pagination = value;
  setPagingParams = (value: PagingParams) => this.pagingParams = value;
  
  loadPosts = async () => {
    this.setLoading(true);
    try {
      const result = await agent.Posts.list(this.axiosParams);

      result.data.forEach(p => runInAction(() => this.postRegystry.set(p.id, p)));
      this.setPagination(result.pagination);
    } catch(error) {
      console.log(error);
    } finally {
      this.setLoading(false);
    }
  }

  createPost = async (value: PostFormValues) => {
    this.setLoading(true);
    try {
      await agent.Posts.create(value);
      const post = new Post(value);

      this.setPost(post);
      this.setLoading(false);
    } catch(error) {
      console.log(error);
      this.setLoading(false);
    }
  }
  
  get axiosParams() {
    const params = new URLSearchParams();

    params.append('pageNumber', this.pagingParams.pageNumber.toString());
    params.append('pageSize', this.pagingParams.pageSize.toString());
    return (params);
  }
  get getGroups(): IPost[] {
    return Array.from(this.postRegystry.values());
  }
  
  private setPost = (post: IPost) => this.postRegystry.set(post.id, post);
}