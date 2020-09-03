import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardShopingSliderPage } from './card-shoping-slider.page';

describe('CardShopingSliderPage', () => {
  let component: CardShopingSliderPage;
  let fixture: ComponentFixture<CardShopingSliderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardShopingSliderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardShopingSliderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
