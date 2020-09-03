import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabLeftIconPage } from './fab-left-icon.page';

describe('FabLeftIconPage', () => {
  let component: FabLeftIconPage;
  let fixture: ComponentFixture<FabLeftIconPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabLeftIconPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabLeftIconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
