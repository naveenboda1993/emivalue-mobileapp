import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegisterThreePage } from './form-register-three.page';

describe('FormRegisterThreePage', () => {
  let component: FormRegisterThreePage;
  let fixture: ComponentFixture<FormRegisterThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRegisterThreePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRegisterThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
