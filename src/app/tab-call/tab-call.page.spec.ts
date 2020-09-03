import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabCallPage } from './tab-call.page';

describe('TabCallPage', () => {
  let component: TabCallPage;
  let fixture: ComponentFixture<TabCallPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabCallPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabCallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
