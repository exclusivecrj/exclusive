import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaraPage } from './zara.page';

describe('ZaraPage', () => {
  let component: ZaraPage;
  let fixture: ComponentFixture<ZaraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZaraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
