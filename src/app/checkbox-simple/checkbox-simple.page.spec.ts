import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxSimplePage } from './checkbox-simple.page';

describe('CheckboxSimplePage', () => {
  let component: CheckboxSimplePage;
  let fixture: ComponentFixture<CheckboxSimplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxSimplePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxSimplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
