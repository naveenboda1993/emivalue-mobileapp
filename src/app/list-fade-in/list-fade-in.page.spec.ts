import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFadeInPage } from './list-fade-in.page';

describe('ListFadeInPage', () => {
  let component: ListFadeInPage;
  let fixture: ComponentFixture<ListFadeInPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFadeInPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFadeInPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
