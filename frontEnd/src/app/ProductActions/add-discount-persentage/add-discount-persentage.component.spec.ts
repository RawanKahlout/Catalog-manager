import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDiscountPersentageComponent } from './add-discount-persentage.component';

describe('AddDiscountPersentageComponent', () => {
  let component: AddDiscountPersentageComponent;
  let fixture: ComponentFixture<AddDiscountPersentageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDiscountPersentageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDiscountPersentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
