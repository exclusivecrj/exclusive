import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogistaPage } from './logista.page';

describe('LogistaPage', () => {
  let component: LogistaPage;
  let fixture: ComponentFixture<LogistaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogistaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
