import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastBottomPage } from './toast-bottom.page';

describe('ToastBottomPage', () => {
  let component: ToastBottomPage;
  let fixture: ComponentFixture<ToastBottomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastBottomPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastBottomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
