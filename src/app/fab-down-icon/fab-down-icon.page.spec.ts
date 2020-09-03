import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabDownIconPage } from './fab-down-icon.page';

describe('FabDownIconPage', () => {
  let component: FabDownIconPage;
  let fixture: ComponentFixture<FabDownIconPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabDownIconPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabDownIconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
