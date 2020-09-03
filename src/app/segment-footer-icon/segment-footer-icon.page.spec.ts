import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentFooterIconPage } from './segment-footer-icon.page';

describe('SegmentFooterIconPage', () => {
  let component: SegmentFooterIconPage;
  let fixture: ComponentFixture<SegmentFooterIconPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentFooterIconPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentFooterIconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
