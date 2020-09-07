import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPersonalLoanPage } from './form-personal-loan.page';

describe('FormRegisterThreePage', () => {
  let component: FormPersonalLoanPage;
  let fixture: ComponentFixture<FormPersonalLoanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPersonalLoanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPersonalLoanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
