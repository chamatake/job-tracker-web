import { TestBed } from '@angular/core/testing';

import { ReferralSourceService } from './referral-source.service';

describe('ReferralSourceService', () => {
  let service: ReferralSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReferralSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
