import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSubcategoryTwoPage } from './grid-subcategory-two.page';

describe('GridSubcategoryTwoPage', () => {
  let component: GridSubcategoryTwoPage;
  let fixture: ComponentFixture<GridSubcategoryTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridSubcategoryTwoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridSubcategoryTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
