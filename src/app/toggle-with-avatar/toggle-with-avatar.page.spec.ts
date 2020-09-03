import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleWithAvatarPage } from './toggle-with-avatar.page';

describe('ToggleWithAvatarPage', () => {
  let component: ToggleWithAvatarPage;
  let fixture: ComponentFixture<ToggleWithAvatarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleWithAvatarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleWithAvatarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
