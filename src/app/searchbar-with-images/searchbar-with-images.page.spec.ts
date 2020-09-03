import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbarWithImagesPage } from './searchbar-with-images.page';

describe('SearchbarWithImagesPage', () => {
  let component: SearchbarWithImagesPage;
  let fixture: ComponentFixture<SearchbarWithImagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchbarWithImagesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbarWithImagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
