import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioSquareWithBigImagePage } from './radio-square-with-big-image.page';

describe('RadioSquareWithBigImagePage', () => {
  let component: RadioSquareWithBigImagePage;
  let fixture: ComponentFixture<RadioSquareWithBigImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioSquareWithBigImagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioSquareWithBigImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
