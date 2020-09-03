import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSwipeWithHeaderPage } from './list-swipe-with-header.page';

describe('ListSwipeWithHeaderPage', () => {
  let component: ListSwipeWithHeaderPage;
  let fixture: ComponentFixture<ListSwipeWithHeaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSwipeWithHeaderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSwipeWithHeaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
