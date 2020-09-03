import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardShopingSimplePage } from './card-shoping-simple.page';

describe('CardShopingSimplePage', () => {
  let component: CardShopingSimplePage;
  let fixture: ComponentFixture<CardShopingSimplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardShopingSimplePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardShopingSimplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
