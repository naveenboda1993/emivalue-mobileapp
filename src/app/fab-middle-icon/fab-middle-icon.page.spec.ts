import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabMiddleIconPage } from './fab-middle-icon.page';

describe('FabMiddleIconPage', () => {
  let component: FabMiddleIconPage;
  let fixture: ComponentFixture<FabMiddleIconPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabMiddleIconPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabMiddleIconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
