import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerViewPage } from './tracker-view.page';

describe('TrackerPage', () => {
  let component: TrackerViewPage;
  let fixture: ComponentFixture<TrackerViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackerViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackerViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
