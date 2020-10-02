import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReferralsPage } from './my-referrals.page';

describe('TrackerPage', () => {
  let component: MyReferralsPage;
  let fixture: ComponentFixture<MyReferralsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyReferralsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyReferralsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
