import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderSimplePage } from './slider-simple.page';

describe('SliderSimplePage', () => {
  let component: SliderSimplePage;
  let fixture: ComponentFixture<SliderSimplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderSimplePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderSimplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
