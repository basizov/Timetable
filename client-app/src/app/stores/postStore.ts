import { makeAutoObservable } from "mobx";
import agent from "../api/agent";
import { IPagination, PagingParams } from "../api/models/pagination";
import { IPost, PostFormValues } from "../api/models/post";

export default class  PostStore {
  postRegystry = new Map<string, IPost>();
  loading = false;
  loadingInitial = false;
  pagination: IPagination | null = null;
  pagingParams = new PagingParams(1, 2);
  
  constructor() {
    makeAutoObservable(this);
  }

  setLoading = (value: boolean) => this.loading = value;
  setLoadingInitial = (value: boolean) => this.loadingInitial = value;
  setPagination = (value: IPagination) => this.pagination = value;
  setPagingParams = (value: PagingParams) => this.pagingParams = value;

  clearPosts = () => this.postRegystry.clear();
  
  loadPosts = async () => {
    this.setLoadingInitial(true);
    try {
      const result = await agent.Posts.list(this.axiosParams);

      result.data?.forEach(post => this.setPost(post));
      this.setPagination(result.pagination);
    } catch(error) {
      console.log(error);
    } finally {
      this.setLoadingInitial(false);
    }
  }

  createPost = async (value: PostFormValues) => {
    this.setLoading(true);
    try {
      await agent.Posts.create(value);

      this.clearPosts();
      this.setPagingParams(new PagingParams(1, 2));
      this.loadPosts();
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
  get getPosts(): IPost[] {
    return Array.from(this.postRegystry.values()).sort((a, b) => b.createdTime!.getTime() - a.createdTime!.getTime());
  }
  
  private setPost = (post: IPost) => {
    post.createdTime = new Date(post.createdTime!);
    this.postRegystry.set(post.id, post);
  };
}