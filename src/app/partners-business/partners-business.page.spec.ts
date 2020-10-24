import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersBusinessPage } from './partners-business.page';

describe('ToggleWithAvatarPage', () => {
  let component: PartnersBusinessPage;
  let fixture: ComponentFixture<PartnersBusinessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnersBusinessPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersBusinessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
