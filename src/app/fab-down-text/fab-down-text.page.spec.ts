import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabDownTextPage } from './fab-down-text.page';

describe('FabDownTextPage', () => {
  let component: FabDownTextPage;
  let fixture: ComponentFixture<FabDownTextPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabDownTextPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabDownTextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
