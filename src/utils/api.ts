import axios from "axios";
import { SubjectList } from "./interface";

export const GetSubjects = async (): Promise<SubjectList> => {
  try {
    const subjects = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/subjects`);
    return subjects.data as SubjectList;
  } catch (err) {
    console.error("error fetching subject names and codes: ", err);
    return {
        subjects: [],
        subjectCodes: []
    } as SubjectList;
  }
};
