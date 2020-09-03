import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabHeaderIconPage } from './tab-header-icon.page';

describe('TabHeaderIconPage', () => {
  let component: TabHeaderIconPage;
  let fixture: ComponentFixture<TabHeaderIconPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabHeaderIconPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabHeaderIconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
