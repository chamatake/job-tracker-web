export class JobApplication {
  id: number;
  jobPosting: JobPosting;
  applicationStatuses: ApplicationStatus[];
  currentStatus: ApplicationStatus;
  appliedDate: date;
  resumeFilename: string;
  coverLetterFilename: string;
}
