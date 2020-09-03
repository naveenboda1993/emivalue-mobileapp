import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeWithCardPage } from './badge-with-card.page';

describe('BadgeWithCardPage', () => {
  let component: BadgeWithCardPage;
  let fixture: ComponentFixture<BadgeWithCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeWithCardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeWithCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
