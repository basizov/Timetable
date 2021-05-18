export interface  IUser {
  username: string;
  status: string;
  displayName: string;
  token: string;
  isAdmin: boolean;
  image?: string;
}

export interface  IUserForm {
  login: string;
  password: string;
  username?: string;
  displayName?: string;
}