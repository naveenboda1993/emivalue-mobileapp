import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSwipeFullImagePage } from './list-swipe-full-image.page';

describe('ListSwipeFullImagePage', () => {
  let component: ListSwipeFullImagePage;
  let fixture: ComponentFixture<ListSwipeFullImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSwipeFullImagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSwipeFullImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
