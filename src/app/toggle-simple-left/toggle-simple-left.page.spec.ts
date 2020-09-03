import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleSimpleLeftPage } from './toggle-simple-left.page';

describe('ToggleSimpleLeftPage', () => {
  let component: ToggleSimpleLeftPage;
  let fixture: ComponentFixture<ToggleSimpleLeftPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleSimpleLeftPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleSimpleLeftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
