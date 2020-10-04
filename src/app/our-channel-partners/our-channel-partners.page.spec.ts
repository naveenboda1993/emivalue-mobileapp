import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurChannelPartnersPage } from './our-channel-partners.page';

describe('TrackerPage', () => {
  let component: OurChannelPartnersPage;
  let fixture: ComponentFixture<OurChannelPartnersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurChannelPartnersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurChannelPartnersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
