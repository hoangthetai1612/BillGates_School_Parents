/* eslint-disable @typescript-eslint/naming-convention */
export interface HomeWork {
  HomeworkId: number;
  ClassId: number;
  Title: string;
  MediaURL: string;
  CreatedOn: Date;
  HomeworkMediaList: HomeWorkMedia[];
  Name: string;
}
export interface HomeWorkMedia {
  HomeworkId: number;
  HomeworkMediaId: number;
  MediaId: number;
  MediaURL: string;
}
