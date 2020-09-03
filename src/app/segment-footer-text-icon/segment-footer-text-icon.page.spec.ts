import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentFooterTextIconPage } from './segment-footer-text-icon.page';

describe('SegmentFooterTextIconPage', () => {
  let component: SegmentFooterTextIconPage;
  let fixture: ComponentFixture<SegmentFooterTextIconPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentFooterTextIconPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentFooterTextIconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
