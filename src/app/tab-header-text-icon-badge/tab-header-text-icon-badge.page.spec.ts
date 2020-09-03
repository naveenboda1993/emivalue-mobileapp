import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabHeaderTextIconBadgePage } from './tab-header-text-icon-badge.page';

describe('TabHeaderTextIconBadgePage', () => {
  let component: TabHeaderTextIconBadgePage;
  let fixture: ComponentFixture<TabHeaderTextIconBadgePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabHeaderTextIconBadgePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabHeaderTextIconBadgePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
