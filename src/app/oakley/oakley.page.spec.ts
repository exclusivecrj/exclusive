import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OakleyPage } from './oakley.page';

describe('OakleyPage', () => {
  let component: OakleyPage;
  let fixture: ComponentFixture<OakleyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OakleyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OakleyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
