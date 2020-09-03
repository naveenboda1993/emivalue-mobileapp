import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormForgetThreePage } from './form-forget-three.page';

describe('FormForgetThreePage', () => {
  let component: FormForgetThreePage;
  let fixture: ComponentFixture<FormForgetThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormForgetThreePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormForgetThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
