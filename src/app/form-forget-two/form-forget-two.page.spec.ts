import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormForgetTwoPage } from './form-forget-two.page';

describe('FormForgetTwoPage', () => {
  let component: FormForgetTwoPage;
  let fixture: ComponentFixture<FormForgetTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormForgetTwoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormForgetTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
