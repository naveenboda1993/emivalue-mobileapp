import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSwipeRightToLeftPage } from './list-swipe-right-to-left.page';

describe('ListSwipeRightToLeftPage', () => {
  let component: ListSwipeRightToLeftPage;
  let fixture: ComponentFixture<ListSwipeRightToLeftPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSwipeRightToLeftPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSwipeRightToLeftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
