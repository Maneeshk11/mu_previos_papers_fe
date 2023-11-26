export interface SubjectList {
  subjects: string[];
  subjectCodes: string[];
}

export interface PaperInfo {
  Subject_code: string;
  Subject_name: string;
  Semester: number;
  Exam_type: string;
  Exam_occasion: string;
  Exam_year: number;
  Branch: string;
  File_path: string;
}
