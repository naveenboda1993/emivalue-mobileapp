import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTextPage } from './button-text.page';

describe('ButtonTextPage', () => {
  let component: ButtonTextPage;
  let fixture: ComponentFixture<ButtonTextPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonTextPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonTextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
