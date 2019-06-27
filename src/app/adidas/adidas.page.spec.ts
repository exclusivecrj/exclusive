import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdidasPage } from './adidas.page';

describe('AdidasPage', () => {
  let component: AdidasPage;
  let fixture: ComponentFixture<AdidasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdidasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
