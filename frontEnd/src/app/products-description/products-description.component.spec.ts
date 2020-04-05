import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDescriptionComponent } from './products-description.component';

describe('ProductsDescriptionComponent', () => {
  let component: ProductsDescriptionComponent;
  let fixture: ComponentFixture<ProductsDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
