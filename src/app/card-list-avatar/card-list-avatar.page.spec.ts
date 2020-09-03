import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListAvatarPage } from './card-list-avatar.page';

describe('CardListAvatarPage', () => {
  let component: CardListAvatarPage;
  let fixture: ComponentFixture<CardListAvatarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardListAvatarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListAvatarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
