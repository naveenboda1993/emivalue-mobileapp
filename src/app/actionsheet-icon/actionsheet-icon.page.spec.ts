import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsheetIconPage } from './actionsheet-icon.page';

describe('ActionsheetIconPage', () => {
  let component: ActionsheetIconPage;
  let fixture: ComponentFixture<ActionsheetIconPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionsheetIconPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsheetIconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
