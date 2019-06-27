import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MrCatPage } from './mr-cat.page';

describe('MrCatPage', () => {
  let component: MrCatPage;
  let fixture: ComponentFixture<MrCatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MrCatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MrCatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
