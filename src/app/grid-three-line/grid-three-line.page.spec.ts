import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridThreeLinePage } from './grid-three-line.page';

describe('GridThreeLinePage', () => {
  let component: GridThreeLinePage;
  let fixture: ComponentFixture<GridThreeLinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridThreeLinePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridThreeLinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
