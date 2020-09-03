import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSectionPage } from './grid-section.page';

describe('GridSectionPage', () => {
  let component: GridSectionPage;
  let fixture: ComponentFixture<GridSectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridSectionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridSectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
