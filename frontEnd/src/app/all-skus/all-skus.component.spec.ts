import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSkusComponent } from './all-skus.component';

describe('AllSkusComponent', () => {
  let component: AllSkusComponent;
  let fixture: ComponentFixture<AllSkusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSkusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSkusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
