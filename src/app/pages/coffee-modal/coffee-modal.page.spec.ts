import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeModalPage } from './coffee-modal.page';

describe('CoffeeModalPage', () => {
  let component: CoffeeModalPage;
  let fixture: ComponentFixture<CoffeeModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
