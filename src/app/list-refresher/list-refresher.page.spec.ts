import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRefresherPage } from './list-refresher.page';

describe('ListRefresherPage', () => {
  let component: ListRefresherPage;
  let fixture: ComponentFixture<ListRefresherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRefresherPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRefresherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
