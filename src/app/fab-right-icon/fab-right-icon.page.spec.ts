import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabRightIconPage } from './fab-right-icon.page';

describe('FabRightIconPage', () => {
  let component: FabRightIconPage;
  let fixture: ComponentFixture<FabRightIconPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabRightIconPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabRightIconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
