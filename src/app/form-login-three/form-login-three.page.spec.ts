import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLoginThreePage } from './form-login-three.page';

describe('FormLoginThreePage', () => {
  let component: FormLoginThreePage;
  let fixture: ComponentFixture<FormLoginThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLoginThreePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLoginThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
