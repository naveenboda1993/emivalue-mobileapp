import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDocumentsPage } from './add-documents.page';

describe('AddDocumentsPage', () => {
  let component: AddDocumentsPage;
  let fixture: ComponentFixture<AddDocumentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDocumentsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDocumentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
