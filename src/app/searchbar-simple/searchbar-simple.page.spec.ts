import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbarSimplePage } from './searchbar-simple.page';

describe('SearchbarSimplePage', () => {
  let component: SearchbarSimplePage;
  let fixture: ComponentFixture<SearchbarSimplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchbarSimplePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbarSimplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
