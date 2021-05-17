import { v4 as uuid } from 'uuid';

export interface  IFile {
  id: string;
  name: string;
  path: string;
}

export class File implements IFile {
  id: string;
  name: string;
  path: string;

  constructor(item: globalThis.File) {
    const split = item.name.split('/');

    this.id = uuid();
    this.name = split[split.length - 1];
    this.path = item.name;
  }
}