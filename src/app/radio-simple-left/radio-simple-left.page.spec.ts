import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioSimpleLeftPage } from './radio-simple-left.page';

describe('RadioSimpleLeftPage', () => {
  let component: RadioSimpleLeftPage;
  let fixture: ComponentFixture<RadioSimpleLeftPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioSimpleLeftPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioSimpleLeftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
