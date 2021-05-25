export interface  IMessage {
  id: string;
  createdTime: Date;
  body: string;
  username: string;
  displayname: string;
  image: string;
}

export interface IMessageForm {
  postId?: string;
  body: string;
}