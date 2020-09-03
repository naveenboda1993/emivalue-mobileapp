import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSlideLeftPage } from './list-slide-left.page';

describe('ListSlideLeftPage', () => {
  let component: ListSlideLeftPage;
  let fixture: ComponentFixture<ListSlideLeftPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSlideLeftPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSlideLeftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
