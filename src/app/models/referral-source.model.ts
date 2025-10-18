import { ReferralSourceType } from "./referral-source-type.enum";

export interface ReferralSource {
  id: number;
  referralName: string;
  type: ReferralSourceType;
}
