import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastMiddlePage } from './toast-middle.page';

describe('ToastMiddlePage', () => {
  let component: ToastMiddlePage;
  let fixture: ComponentFixture<ToastMiddlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastMiddlePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastMiddlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
