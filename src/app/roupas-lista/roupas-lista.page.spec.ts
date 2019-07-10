import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoupasListaPage } from './roupas-lista.page';

describe('RoupasListaPage', () => {
  let component: RoupasListaPage;
  let fixture: ComponentFixture<RoupasListaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoupasListaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoupasListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
