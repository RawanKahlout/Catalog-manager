import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedActionsComponent } from './featured-actions.component';

describe('FeaturedActionsComponent', () => {
  let component: FeaturedActionsComponent;
  let fixture: ComponentFixture<FeaturedActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
