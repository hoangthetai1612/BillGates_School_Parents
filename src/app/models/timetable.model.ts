export interface TimeTableLesson {
  TimeTableLessonId: number;
  LessonId: number;
  LessonName: string;
  TimeTableId: Date;
  DayValue: string;
  SubjectId: number;
  SubjectName: string;
  RoomName: string;
  TeacherName: string;
  Type: number;
  LessonType: number;
  Status: number;
  Note: string;
}
