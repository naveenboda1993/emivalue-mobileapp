import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTimelineThemeThreePage } from './card-timeline-theme-three.page';

describe('CardTimelineThemeThreePage', () => {
  let component: CardTimelineThemeThreePage;
  let fixture: ComponentFixture<CardTimelineThemeThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTimelineThemeThreePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTimelineThemeThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
