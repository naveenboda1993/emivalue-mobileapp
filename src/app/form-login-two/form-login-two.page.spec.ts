import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLoginTwoPage } from './form-login-two.page';

describe('FormLoginTwoPage', () => {
  let component: FormLoginTwoPage;
  let fixture: ComponentFixture<FormLoginTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLoginTwoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLoginTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
