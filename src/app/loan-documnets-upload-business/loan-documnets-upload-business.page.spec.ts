import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDocumnetsUploadBusinessTextPage } from './loan-documnets-upload-business.page';

describe('SegmentHeaderTextPage', () => {
  let component: LoanDocumnetsUploadBusinessTextPage;
  let fixture: ComponentFixture<LoanDocumnetsUploadBusinessTextPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanDocumnetsUploadBusinessTextPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanDocumnetsUploadBusinessTextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
