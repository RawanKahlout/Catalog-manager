import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSkusComponent } from './show-skus.component';

describe('ShowSkusComponent', () => {
  let component: ShowSkusComponent;
  let fixture: ComponentFixture<ShowSkusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSkusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSkusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
