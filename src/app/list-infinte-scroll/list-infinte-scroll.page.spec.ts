import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInfinteScrollPage } from './list-infinte-scroll.page';

describe('ListInfinteScrollPage', () => {
  let component: ListInfinteScrollPage;
  let fixture: ComponentFixture<ListInfinteScrollPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListInfinteScrollPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInfinteScrollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
