import { ApplicationStatusType } from "./application-status-type.enum";
import { JobApplication } from "./job-application.model";

export interface ApplicationStatus {
  id: number;
  jobApplication: JobApplication;
  applicationStatusType: ApplicationStatusType;
  activeDate: Date;
  inactiveDate: Date;
}
