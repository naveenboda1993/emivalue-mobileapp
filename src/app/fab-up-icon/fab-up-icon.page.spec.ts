import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabUpIconPage } from './fab-up-icon.page';

describe('FabUpIconPage', () => {
  let component: FabUpIconPage;
  let fixture: ComponentFixture<FabUpIconPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabUpIconPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabUpIconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
