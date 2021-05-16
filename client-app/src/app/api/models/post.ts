import { IFile } from "./file";
import { IPhoto } from "./photo";
import { v4 as uuid } from 'uuid';

interface IPostSimple {
  title: string;
  description?: string;
}

export interface  IPost {
  id: string;
  title: string;
  description?: string;
  photos?: IPhoto[];
  files?: IFile[];
}

export interface  Post {
  id: string;
  title: string;
  description?: string;
  photos?: IPhoto[];
  files?: IFile[];
}

export class  Post implements IPost {
  constructor(init: PostFormValues) {
    this.id = init.id;
    this.title = init.title;
    this.description = init.description;
    this.photos = this.convertToIPhoto(init.photos);
    this.files = this.convertToIFile(init.files);
  }

  convertToIFile(value: FileList | null | undefined) {
    let res: IFile[] = [];

    if (value) {
      for (let i = 0; i < value.length; ++i) {
        const temp = value.item(i);

        if (temp && temp.name) {
          const split = temp.name.split('/');

          res.push({
            id: uuid(),
            name: split[split.length - 1],
            path: temp.name
          });
        }
      }
    }
    return (res);
  }
  convertToIPhoto(value: FileList | null | undefined) {
    let res: IPhoto[] = [];

    if (value) {
      for (let i = 0; i < value.length; ++i) {
        const temp = value.item(i);

        if (temp && temp.name) {
          res.push({
            id: uuid(),
            url: temp.name
          });
        }
      }
    }
    return (res);
  }
}

export class  PostFormValues {
  id: string;
  title: string;
  description?: string;
  photos?: FileList | null;
  files?: FileList | null;
  
  constructor(activity: PostFormValues) {
    this.id = activity.id;
    this.title = activity.title;
    this.description = activity.description;
    this.photos = activity.photos;
    this.files = activity.files;
  }
}