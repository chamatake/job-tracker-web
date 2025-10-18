import { InterviewType } from "./interview-type.enum";
import { JobApplication } from "./job-application.model";

export interface Interview {
  id: number;
  jobApplication: JobApplication;
  interviewType: InterviewType;
  interviewDate: Date;
  notes: string;
}
