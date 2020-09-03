import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridAlbumPage } from './grid-album.page';

describe('GridAlbumPage', () => {
  let component: GridAlbumPage;
  let fixture: ComponentFixture<GridAlbumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridAlbumPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridAlbumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
