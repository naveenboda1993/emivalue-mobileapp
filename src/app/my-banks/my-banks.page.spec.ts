import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBanksPage } from './my-banks.page';

describe('MyBanksPage', () => {
  let component: MyBanksPage;
  let fixture: ComponentFixture<MyBanksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBanksPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBanksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
