import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSubcategoryPage } from './grid-subcategory.page';

describe('GridSubcategoryPage', () => {
  let component: GridSubcategoryPage;
  let fixture: ComponentFixture<GridSubcategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridSubcategoryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridSubcategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
