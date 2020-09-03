import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeCardPage } from './badge-card.page';

describe('BadgeCardPage', () => {
  let component: BadgeCardPage;
  let fixture: ComponentFixture<BadgeCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeCardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
