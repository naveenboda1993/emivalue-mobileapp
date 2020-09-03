import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertPromptPage } from './alert-prompt.page';

describe('AlertPromptPage', () => {
  let component: AlertPromptPage;
  let fixture: ComponentFixture<AlertPromptPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertPromptPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertPromptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
