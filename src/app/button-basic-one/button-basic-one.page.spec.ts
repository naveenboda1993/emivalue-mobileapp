import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBasicOnePage } from './button-basic-one.page';

describe('ButtonBasicOnePage', () => {
  let component: ButtonBasicOnePage;
  let fixture: ComponentFixture<ButtonBasicOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonBasicOnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonBasicOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
