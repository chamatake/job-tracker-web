import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralSource } from './referral-source';

describe('ReferralSource', () => {
  let component: ReferralSource;
  let fixture: ComponentFixture<ReferralSource>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferralSource]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferralSource);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
