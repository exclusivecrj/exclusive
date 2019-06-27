import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NikePage } from './nike.page';

describe('NikePage', () => {
  let component: NikePage;
  let fixture: ComponentFixture<NikePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NikePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NikePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
