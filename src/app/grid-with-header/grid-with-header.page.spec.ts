import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridWithHeaderPage } from './grid-with-header.page';

describe('GridWithHeaderPage', () => {
  let component: GridWithHeaderPage;
  let fixture: ComponentFixture<GridWithHeaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridWithHeaderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridWithHeaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
