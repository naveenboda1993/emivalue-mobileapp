import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDocumnetsUploadTextPage } from './loan-documnets-upload.page';

describe('SegmentHeaderTextPage', () => {
  let component: LoanDocumnetsUploadTextPage;
  let fixture: ComponentFixture<LoanDocumnetsUploadTextPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanDocumnetsUploadTextPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanDocumnetsUploadTextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
