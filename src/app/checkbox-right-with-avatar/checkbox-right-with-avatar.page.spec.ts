import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxRightWithAvatarPage } from './checkbox-right-with-avatar.page';

describe('CheckboxRightWithAvatarPage', () => {
  let component: CheckboxRightWithAvatarPage;
  let fixture: ComponentFixture<CheckboxRightWithAvatarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxRightWithAvatarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxRightWithAvatarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
