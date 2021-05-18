import { ITimetable } from "./timetable";

export interface  IGroup {
  id: string;
  number: string;
  timetable: ITimetable[];
}