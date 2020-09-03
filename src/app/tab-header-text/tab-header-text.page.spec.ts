import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabHeaderTextPage } from './tab-header-text.page';

describe('TabHeaderTextPage', () => {
  let component: TabHeaderTextPage;
  let fixture: ComponentFixture<TabHeaderTextPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabHeaderTextPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabHeaderTextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
