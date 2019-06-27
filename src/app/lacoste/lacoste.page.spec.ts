import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LacostePage } from './lacoste.page';

describe('LacostePage', () => {
  let component: LacostePage;
  let fixture: ComponentFixture<LacostePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LacostePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LacostePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
