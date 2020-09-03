import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExpandablePage } from './list-expandable.page';

describe('ListExpandablePage', () => {
  let component: ListExpandablePage;
  let fixture: ComponentFixture<ListExpandablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListExpandablePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExpandablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
