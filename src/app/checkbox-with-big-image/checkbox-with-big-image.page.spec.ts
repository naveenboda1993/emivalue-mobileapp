import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxWithBigImagePage } from './checkbox-with-big-image.page';

describe('CheckboxWithBigImagePage', () => {
  let component: CheckboxWithBigImagePage;
  let fixture: ComponentFixture<CheckboxWithBigImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxWithBigImagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxWithBigImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
