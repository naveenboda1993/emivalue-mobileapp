import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTransparentPage } from './button-transparent.page';

describe('ButtonTransparentPage', () => {
  let component: ButtonTransparentPage;
  let fixture: ComponentFixture<ButtonTransparentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonTransparentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonTransparentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
