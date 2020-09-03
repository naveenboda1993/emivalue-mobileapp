import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderImagesPage } from './slider-images.page';

describe('SliderImagesPage', () => {
  let component: SliderImagesPage;
  let fixture: ComponentFixture<SliderImagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderImagesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderImagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
