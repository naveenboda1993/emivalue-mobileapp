import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderArrowsPage } from './slider-arrows.page';

describe('SliderArrowsPage', () => {
  let component: SliderArrowsPage;
  let fixture: ComponentFixture<SliderArrowsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderArrowsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderArrowsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
