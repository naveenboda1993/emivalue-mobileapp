import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabLeftTextPage } from './fab-left-text.page';

describe('FabLeftTextPage', () => {
  let component: FabLeftTextPage;
  let fixture: ComponentFixture<FabLeftTextPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabLeftTextPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabLeftTextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
