import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioSimpleRightPage } from './radio-simple-right.page';

describe('RadioSimpleRightPage', () => {
  let component: RadioSimpleRightPage;
  let fixture: ComponentFixture<RadioSimpleRightPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioSimpleRightPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioSimpleRightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
