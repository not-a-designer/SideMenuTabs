import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeshopSearchPage } from './coffeeshop-search.page';

describe('CoffeeshopSearchPage', () => {
  let component: CoffeeshopSearchPage;
  let fixture: ComponentFixture<CoffeeshopSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeshopSearchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeshopSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
