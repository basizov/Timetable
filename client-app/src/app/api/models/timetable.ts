import { IGroup } from "./group";

export interface  ITimetable {
  id: string;
  group: IGroup;
  day: string;
  week: true;
  subject: string;
  teacher: string;
  building: number;
  cabinet: string;
  subjectNumber: string;
  subjectType: string;
}