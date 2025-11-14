import { Company } from "./company.model";
import { OfficeSituation } from "./office-situation.enum";
import { ReferralSource } from "./referral-source.model";

export interface JobPosting {
  id: number;
  companyId: Company;
  title: string;
  requisitionId: string;
  postingUrl: string;
  salaryRangeMin: number;
  salaryRangeMax: number;
  officeSituation: OfficeSituation;
  referralSource: ReferralSource;
}
