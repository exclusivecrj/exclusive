import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalvinKleinPage } from './calvin-klein.page';

describe('CalvinKleinPage', () => {
  let component: CalvinKleinPage;
  let fixture: ComponentFixture<CalvinKleinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalvinKleinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalvinKleinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
