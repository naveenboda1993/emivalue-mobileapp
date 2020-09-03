import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabHeaderTextIconPage } from './tab-header-text-icon.page';

describe('TabHeaderTextIconPage', () => {
  let component: TabHeaderTextIconPage;
  let fixture: ComponentFixture<TabHeaderTextIconPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabHeaderTextIconPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabHeaderTextIconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
