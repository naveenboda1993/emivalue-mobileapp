import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeWithListPage } from './badge-with-list.page';

describe('BadgeWithListPage', () => {
  let component: BadgeWithListPage;
  let fixture: ComponentFixture<BadgeWithListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeWithListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeWithListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
