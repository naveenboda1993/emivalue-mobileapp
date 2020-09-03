import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegisterTwoPage } from './form-register-two.page';

describe('FormRegisterTwoPage', () => {
  let component: FormRegisterTwoPage;
  let fixture: ComponentFixture<FormRegisterTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRegisterTwoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRegisterTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
