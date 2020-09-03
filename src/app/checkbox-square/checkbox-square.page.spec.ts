import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxSquarePage } from './checkbox-square.page';

describe('CheckboxSquarePage', () => {
  let component: CheckboxSquarePage;
  let fixture: ComponentFixture<CheckboxSquarePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxSquarePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxSquarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
