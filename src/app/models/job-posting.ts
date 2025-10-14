export class JobPosting {
  id: number;
  title: string;
  requisitionId: string;
  postingUrl: string;
  salaryRangeMin: number;
  salaryRangeMax: number;
  officeSituation: OfficeSituation;
  requiredTech: Technology[];
  preferredTech: Technology[];
  referralSource: ReferralSouce;
}
