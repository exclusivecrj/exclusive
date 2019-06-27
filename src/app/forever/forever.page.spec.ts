import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeverPage } from './forever.page';

describe('ForeverPage', () => {
  let component: ForeverPage;
  let fixture: ComponentFixture<ForeverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForeverPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
