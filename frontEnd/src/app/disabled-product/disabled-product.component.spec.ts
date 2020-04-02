import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledProductComponent } from './disabled-product.component';

describe('DisabledProductComponent', () => {
  let component: DisabledProductComponent;
  let fixture: ComponentFixture<DisabledProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisabledProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabledProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
