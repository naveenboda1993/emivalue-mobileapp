import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCategoryPage } from './grid-category.page';

describe('GridCategoryPage', () => {
  let component: GridCategoryPage;
  let fixture: ComponentFixture<GridCategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridCategoryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
