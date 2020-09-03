import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeMoviePage } from './badge-movie.page';

describe('BadgeMoviePage', () => {
  let component: BadgeMoviePage;
  let fixture: ComponentFixture<BadgeMoviePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeMoviePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeMoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
