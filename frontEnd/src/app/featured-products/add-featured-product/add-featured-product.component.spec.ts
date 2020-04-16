import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFeaturedProductComponent } from './add-featured-product.component';

describe('AddFeaturedProductComponent', () => {
  let component: AddFeaturedProductComponent;
  let fixture: ComponentFixture<AddFeaturedProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFeaturedProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFeaturedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
