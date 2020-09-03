import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabUpTextPage } from './fab-up-text.page';

describe('FabUpTextPage', () => {
  let component: FabUpTextPage;
  let fixture: ComponentFixture<FabUpTextPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabUpTextPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabUpTextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
