import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabSimpleIconPage } from './fab-simple-icon.page';

describe('FabSimpleIconPage', () => {
  let component: FabSimpleIconPage;
  let fixture: ComponentFixture<FabSimpleIconPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabSimpleIconPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabSimpleIconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
