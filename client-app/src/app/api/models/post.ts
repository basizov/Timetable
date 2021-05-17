import { IFile } from "./file";
import { IPhoto } from "./photo";
import { v4 as uuid } from 'uuid';

export interface  IPost {
  id: string;
  title: string;
  createdTime: Date | null;
  description?: string;
  photos?: IPhoto[];
  files?: IFile[];
}

export interface  Post {
  id: string;
  title: string;
  createdTime: Date | null;
  description?: string;
  photos?: IPhoto[];
  files?: IFile[];
}

export class  Post implements IPost {
  constructor(init: PostFormValues) {
    this.id = init.id;
    this.title = init.title;
    this.createdTime = init.createdTime;
    this.description = init.description;
    this.photos = this.convertToIPhoto(init.photos);
    this.files = this.convertToIFile(init.files);
  }

  convertToIFile(value: FileList | null | undefined) {
    let res: IFile[] = [];

    if (value) {
      const fileArray = Array.from(value);

      fileArray.forEach(file => {
        const split = file.name.split('/');

        res.push({
          id: uuid(),
          name: split[split.length - 1],
          path: file.name
        });
      });
    }
    return (res);
  }
  convertToIPhoto(value: FileList | null | undefined) {
    let res: IPhoto[] = [];

    if (value) {
      const fileArray = Array.from(value);

      fileArray.forEach(file => {
        res.push({
          id: uuid(),
          url: file.name
        });
      });
    }
    return (res);
  }
}

export class  PostFormValues {
  id: string;
  title: string;
  createdTime: Date | null;
  description?: string;
  photos?: FileList | null;
  files?: FileList | null;
  
  constructor(activity: PostFormValues) {
    this.id = activity.id;
    this.title = activity.title;
    this.createdTime = activity.createdTime;
    this.description = activity.description;
    this.photos = activity.photos;
    this.files = activity.files;
  }
}