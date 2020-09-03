import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabChatPage } from './tab-chat.page';

describe('TabChatPage', () => {
  let component: TabChatPage;
  let fixture: ComponentFixture<TabChatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabChatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
