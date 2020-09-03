import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSlideRightPage } from './list-slide-right.page';

describe('ListSlideRightPage', () => {
  let component: ListSlideRightPage;
  let fixture: ComponentFixture<ListSlideRightPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSlideRightPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSlideRightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
