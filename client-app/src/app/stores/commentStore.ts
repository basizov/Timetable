import { HubConnection, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { makeAutoObservable, runInAction } from "mobx";
import { IMessage, IMessageForm } from "../api/models/message";
import { store } from "./store";

export default class  CommentStore {
  loading = false;
  loadingInitial = false;
  comments: IMessage[] = [];
  hubConnection: HubConnection | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setLoading = (value: boolean) => this.loading = value;
  setLoadingInitial = (value: boolean) => this.loadingInitial = value;
  setComments = (value: IMessage[]) => this.comments = value;

  createHubConnection = (postId: string) => {
    if (store.postStore.selectedPost) {
      this.hubConnection = new HubConnectionBuilder()
        .withUrl(`http://localhost:5000/chat?postId=${postId}`, {
          accessTokenFactory: () => store.userStore.user?.token!
        })
        .withAutomaticReconnect()
        .configureLogging(LogLevel.Information)
        .build();

      this.hubConnection.start().catch((error) => console.log('Ошибка при создании HubConnection', error));
      this.hubConnection.on('LoadComments', (comments: IMessage[]) => {
        this.setLoadingInitial(true);
        runInAction(() => comments.forEach(comment => comment.createdTime = new Date(comment.createdTime + 'Z')));
        this.setComments(comments);
        this.setLoadingInitial(false);
      });
      this.hubConnection.on('ReceiveComment', (comment: IMessage) => {
        runInAction(() => comment.createdTime = new Date(comment.createdTime + 'Z'));
        this.setComment(comment);
      });
    }
  }
  stopHubConnection = () => {
    this.hubConnection?.stop().catch((error) => console.log('Ошибка при остановке HubConnection', error));
  }
  clearComments = () => {
    this.setComments([]);
    this.stopHubConnection();
  }
  addComment = async (values: IMessageForm) => {
    values.postId = store.postStore.selectedPost?.id!;
    this.setLoading(true);
    try {
      await this.hubConnection?.invoke('SendComment', values);
    } catch (error) {
      console.log(error);
    } finally {
      this.setLoading(false);
    }
  }
  
  private setComment = (comment: IMessage) => this.comments.push(comment);
}