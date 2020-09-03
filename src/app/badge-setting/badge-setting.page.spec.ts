import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeSettingPage } from './badge-setting.page';

describe('BadgeSettingPage', () => {
  let component: BadgeSettingPage;
  let fixture: ComponentFixture<BadgeSettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeSettingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeSettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
