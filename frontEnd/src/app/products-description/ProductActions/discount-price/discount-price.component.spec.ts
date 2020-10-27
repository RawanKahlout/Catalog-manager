import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountPriceComponent } from './discount-price.component';

describe('DiscountPriceComponent', () => {
  let component: DiscountPriceComponent;
  let fixture: ComponentFixture<DiscountPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscountPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
