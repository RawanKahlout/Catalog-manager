import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFeaturedProductComponent } from './edit-featured-product.component';

describe('EditFeaturedProductComponent', () => {
  let component: EditFeaturedProductComponent;
  let fixture: ComponentFixture<EditFeaturedProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFeaturedProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFeaturedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
