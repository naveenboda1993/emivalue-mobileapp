import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardImagesPage } from './card-images.page';

describe('CardImagesPage', () => {
  let component: CardImagesPage;
  let fixture: ComponentFixture<CardImagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardImagesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardImagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
