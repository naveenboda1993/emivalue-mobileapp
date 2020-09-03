import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertCheckboxPage } from './alert-checkbox.page';

describe('AlertCheckboxPage', () => {
  let component: AlertCheckboxPage;
  let fixture: ComponentFixture<AlertCheckboxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertCheckboxPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertCheckboxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
