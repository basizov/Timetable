export interface  IGroup {
  id: string;
  number: string;
  subjects: ISubject[];
}

export interface  ISubject {
  id: string;
  discipline: string;
  cabinet: string;
  building: number;
  type: string;
  time: string;
  days: IDay[];
}

export interface  IDay {
  id: string;
  name: string;
  date: string;
  week: string;
}