import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentScrollableHeaderIconPage } from './segment-scrollable-header-icon.page';

describe('SegmentScrollableHeaderIconPage', () => {
  let component: SegmentScrollableHeaderIconPage;
  let fixture: ComponentFixture<SegmentScrollableHeaderIconPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentScrollableHeaderIconPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentScrollableHeaderIconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
