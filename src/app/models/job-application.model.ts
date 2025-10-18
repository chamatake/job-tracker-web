import { ApplicationStatus } from "./application-status.model";
import { JobPosting } from "./job-posting.model";

export interface JobApplication {
  id: number;
  jobPosting: JobPosting;
  applicationStatuses: ApplicationStatus[];
  currentStatus: ApplicationStatus;
  appliedDate: Date;
  resumeFilename: string;
  coverLetterFilename: string;
}
