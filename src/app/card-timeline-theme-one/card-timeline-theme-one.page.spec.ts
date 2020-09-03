import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTimelineThemeOnePage } from './card-timeline-theme-one.page';

describe('CardTimelineThemeOnePage', () => {
  let component: CardTimelineThemeOnePage;
  let fixture: ComponentFixture<CardTimelineThemeOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTimelineThemeOnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTimelineThemeOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
