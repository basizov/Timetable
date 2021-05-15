export interface  IPost {
  id: string;
  descr?: string;
  photos?: string[];
  files?: string[];
}

export interface  Post {
  id: string;
  descr?: string;
  photos?: string[];
  files?: string[];
}

export class  Post implements IPost {
  constructor(init?: PostFormValues) {
    Object.assign(this, init);
  }
}

export class  PostFormValues {
  id?: string = undefined;
  descr?: string;
  photos?: string[];
  files?: string[];
  
  constructor(activity?: PostFormValues) {
    if (activity) {
      this.id = activity.id;
      this.descr = activity.descr;
      this.photos = activity.photos;
      this.files = activity.files;
    }
  }
}