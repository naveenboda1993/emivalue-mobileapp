import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentScrollableHeaderTextPage } from './segment-scrollable-header-text.page';

describe('SegmentScrollableHeaderTextPage', () => {
  let component: SegmentScrollableHeaderTextPage;
  let fixture: ComponentFixture<SegmentScrollableHeaderTextPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentScrollableHeaderTextPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentScrollableHeaderTextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
