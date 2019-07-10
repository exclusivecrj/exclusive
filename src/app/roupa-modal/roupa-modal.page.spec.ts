import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoupaModalPage } from './roupa-modal.page';

describe('RoupaModalPage', () => {
  let component: RoupaModalPage;
  let fixture: ComponentFixture<RoupaModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoupaModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoupaModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
