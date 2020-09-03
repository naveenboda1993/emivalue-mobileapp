import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLoginOnePage } from './form-login-one.page';

describe('FormLoginOnePage', () => {
  let component: FormLoginOnePage;
  let fixture: ComponentFixture<FormLoginOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLoginOnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLoginOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
