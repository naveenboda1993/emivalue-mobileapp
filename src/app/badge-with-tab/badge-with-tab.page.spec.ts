import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeWithTabPage } from './badge-with-tab.page';

describe('BadgeWithTabPage', () => {
  let component: BadgeWithTabPage;
  let fixture: ComponentFixture<BadgeWithTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeWithTabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeWithTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
