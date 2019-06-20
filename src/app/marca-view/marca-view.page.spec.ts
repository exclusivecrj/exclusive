import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaViewPage } from './marca-view.page';

describe('MarcaViewPage', () => {
  let component: MarcaViewPage;
  let fixture: ComponentFixture<MarcaViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcaViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
