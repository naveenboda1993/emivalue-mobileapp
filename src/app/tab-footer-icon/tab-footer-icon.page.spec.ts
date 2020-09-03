import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabFooterIconPage } from './tab-footer-icon.page';

describe('TabFooterIconPage', () => {
  let component: TabFooterIconPage;
  let fixture: ComponentFixture<TabFooterIconPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabFooterIconPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabFooterIconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
