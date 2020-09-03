import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioCircleWithAvatarPage } from './radio-circle-with-avatar.page';

describe('RadioCircleWithAvatarPage', () => {
  let component: RadioCircleWithAvatarPage;
  let fixture: ComponentFixture<RadioCircleWithAvatarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioCircleWithAvatarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioCircleWithAvatarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
