import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSwipeLeftToRightPage } from './list-swipe-left-to-right.page';

describe('ListSwipeLeftToRightPage', () => {
  let component: ListSwipeLeftToRightPage;
  let fixture: ComponentFixture<ListSwipeLeftToRightPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSwipeLeftToRightPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSwipeLeftToRightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
