import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentFooterTextPage } from './segment-footer-text.page';

describe('SegmentFooterTextPage', () => {
  let component: SegmentFooterTextPage;
  let fixture: ComponentFixture<SegmentFooterTextPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentFooterTextPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentFooterTextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
