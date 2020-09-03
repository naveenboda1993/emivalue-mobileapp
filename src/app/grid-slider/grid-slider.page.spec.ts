import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSliderPage } from './grid-slider.page';

describe('GridSliderPage', () => {
  let component: GridSliderPage;
  let fixture: ComponentFixture<GridSliderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridSliderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridSliderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
