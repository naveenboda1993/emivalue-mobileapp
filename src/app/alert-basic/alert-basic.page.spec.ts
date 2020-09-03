import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertBasicPage } from './alert-basic.page';

describe('AlertBasicPage', () => {
  let component: AlertBasicPage;
  let fixture: ComponentFixture<AlertBasicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertBasicPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertBasicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
