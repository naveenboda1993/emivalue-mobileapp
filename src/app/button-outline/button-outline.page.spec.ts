import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonOutlinePage } from './button-outline.page';

describe('ButtonOutlinePage', () => {
  let component: ButtonOutlinePage;
  let fixture: ComponentFixture<ButtonOutlinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonOutlinePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonOutlinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
