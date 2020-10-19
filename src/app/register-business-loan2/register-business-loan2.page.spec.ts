import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBusinessLoan2Page as RegisterBusinessLoan2Page } from './register-business-loan2.page';

describe('FormRegisterThreePage', () => {
  let component: RegisterBusinessLoan2Page;
  let fixture: ComponentFixture<RegisterBusinessLoan2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterBusinessLoan2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterBusinessLoan2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
