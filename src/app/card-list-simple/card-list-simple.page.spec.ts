import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListSimplePage } from './card-list-simple.page';

describe('CardListSimplePage', () => {
  let component: CardListSimplePage;
  let fixture: ComponentFixture<CardListSimplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardListSimplePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListSimplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
