import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeSizeComponent } from './change-size.component';

describe('ChangeSizeComponent', () => {
  let component: ChangeSizeComponent;
  let fixture: ComponentFixture<ChangeSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
