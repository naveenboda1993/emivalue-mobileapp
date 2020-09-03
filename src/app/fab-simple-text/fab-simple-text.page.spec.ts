import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabSimpleTextPage } from './fab-simple-text.page';

describe('FabSimpleTextPage', () => {
  let component: FabSimpleTextPage;
  let fixture: ComponentFixture<FabSimpleTextPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabSimpleTextPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabSimpleTextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
