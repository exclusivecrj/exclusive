import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizaCompraPage } from './finaliza-compra.page';

describe('FinalizaCompraPage', () => {
  let component: FinalizaCompraPage;
  let fixture: ComponentFixture<FinalizaCompraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalizaCompraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizaCompraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
