import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabMiddleTextPage } from './fab-middle-text.page';

describe('FabMiddleTextPage', () => {
  let component: FabMiddleTextPage;
  let fixture: ComponentFixture<FabMiddleTextPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabMiddleTextPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabMiddleTextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
