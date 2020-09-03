import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDashboardPage } from './card-dashboard.page';

describe('CardDashboardPage', () => {
  let component: CardDashboardPage;
  let fixture: ComponentFixture<CardDashboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDashboardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
