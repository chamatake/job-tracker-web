import { OfficeSituation } from "./office-situation.enum";
import { ReferralSource } from "./referral-source.model";
import { Technology } from "./technology.enum";

export interface JobPosting {
  id: number;
  title: string;
  requisitionId: string;
  postingUrl: string;
  salaryRangeMin: number;
  salaryRangeMax: number;
  officeSituation: OfficeSituation;
  requiredTech: Technology[];
  preferredTech: Technology[];
  referralSource: ReferralSource;
}
