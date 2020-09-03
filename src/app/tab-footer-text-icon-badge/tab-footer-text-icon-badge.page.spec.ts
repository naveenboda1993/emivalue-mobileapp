import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabFooterTextIconBadgePage } from './tab-footer-text-icon-badge.page';

describe('TabFooterTextIconBadgePage', () => {
  let component: TabFooterTextIconBadgePage;
  let fixture: ComponentFixture<TabFooterTextIconBadgePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabFooterTextIconBadgePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabFooterTextIconBadgePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
