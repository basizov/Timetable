import { makeAutoObservable } from "mobx";
import agent from "../api/agent";
import { IFile } from "../api/models/file";

export default class  FileStore {
  loading = false;
  
  constructor() {
    makeAutoObservable(this);
  }
  
  setLoading = (value: boolean) => this.loading = value;

  downloadFile = async (selectFile: IFile) => {
    this.setLoading(true);
    try {
      const file = await agent.File.download(selectFile.id);
      const url = window.URL.createObjectURL(new Blob([file]));
      const link = document.createElement('a');
      
      link.href = url;
      link.setAttribute('download', selectFile.name);
      document.body.appendChild(link);
      link.click();
      link.parentNode?.removeChild(link);
    } catch(error) {
      console.log(error);
    } finally {
      this.setLoading(false);
    }
  }
}