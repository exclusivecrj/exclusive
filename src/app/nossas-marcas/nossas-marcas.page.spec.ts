import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NossasMarcasPage } from './nossas-marcas.page';

describe('NossasMarcasPage', () => {
  let component: NossasMarcasPage;
  let fixture: ComponentFixture<NossasMarcasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NossasMarcasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NossasMarcasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
