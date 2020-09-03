import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTimelineThemeTwoPage } from './card-timeline-theme-two.page';

describe('CardTimelineThemeTwoPage', () => {
  let component: CardTimelineThemeTwoPage;
  let fixture: ComponentFixture<CardTimelineThemeTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTimelineThemeTwoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTimelineThemeTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
