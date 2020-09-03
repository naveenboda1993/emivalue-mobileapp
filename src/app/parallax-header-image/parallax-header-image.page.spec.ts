import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxHeaderImagePage } from './parallax-header-image.page';

describe('ParallaxHeaderImagePage', () => {
  let component: ParallaxHeaderImagePage;
  let fixture: ComponentFixture<ParallaxHeaderImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParallaxHeaderImagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallaxHeaderImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
