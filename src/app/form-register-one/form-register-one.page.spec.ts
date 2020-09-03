import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegisterOnePage } from './form-register-one.page';

describe('FormRegisterOnePage', () => {
  let component: FormRegisterOnePage;
  let fixture: ComponentFixture<FormRegisterOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRegisterOnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRegisterOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
