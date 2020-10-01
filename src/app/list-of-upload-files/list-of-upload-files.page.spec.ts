import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfUploadFilesPage } from './list-of-upload-files.page';

describe('ListOfUploadFilesPage', () => {
  let component: ListOfUploadFilesPage;
  let fixture: ComponentFixture<ListOfUploadFilesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfUploadFilesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfUploadFilesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
