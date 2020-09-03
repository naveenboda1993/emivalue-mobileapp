import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabFooterTextPage } from './tab-footer-text.page';

describe('TabFooterTextPage', () => {
  let component: TabFooterTextPage;
  let fixture: ComponentFixture<TabFooterTextPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabFooterTextPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabFooterTextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
