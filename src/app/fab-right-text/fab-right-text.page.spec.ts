import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabRightTextPage } from './fab-right-text.page';

describe('FabRightTextPage', () => {
  let component: FabRightTextPage;
  let fixture: ComponentFixture<FabRightTextPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabRightTextPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabRightTextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
