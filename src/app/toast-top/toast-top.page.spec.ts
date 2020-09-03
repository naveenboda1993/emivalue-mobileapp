import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastTopPage } from './toast-top.page';

describe('ToastTopPage', () => {
  let component: ToastTopPage;
  let fixture: ComponentFixture<ToastTopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastTopPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastTopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
