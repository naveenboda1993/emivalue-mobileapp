import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsheetSimplePage } from './actionsheet-simple.page';

describe('ActionsheetSimplePage', () => {
  let component: ActionsheetSimplePage;
  let fixture: ComponentFixture<ActionsheetSimplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionsheetSimplePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsheetSimplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
