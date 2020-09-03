import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentHeaderIconPage } from './segment-header-icon.page';

describe('SegmentHeaderIconPage', () => {
  let component: SegmentHeaderIconPage;
  let fixture: ComponentFixture<SegmentHeaderIconPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentHeaderIconPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentHeaderIconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
