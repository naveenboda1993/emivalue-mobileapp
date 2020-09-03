import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBasicTwoPage } from './button-basic-two.page';

describe('ButtonBasicTwoPage', () => {
  let component: ButtonBasicTwoPage;
  let fixture: ComponentFixture<ButtonBasicTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonBasicTwoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonBasicTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
