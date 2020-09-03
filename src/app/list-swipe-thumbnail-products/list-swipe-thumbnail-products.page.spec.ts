import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSwipeThumbnailProductsPage } from './list-swipe-thumbnail-products.page';

describe('ListSwipeThumbnailProductsPage', () => {
  let component: ListSwipeThumbnailProductsPage;
  let fixture: ComponentFixture<ListSwipeThumbnailProductsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSwipeThumbnailProductsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSwipeThumbnailProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
