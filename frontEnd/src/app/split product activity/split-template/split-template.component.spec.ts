import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitTemplateComponent } from './split-template.component';

describe('SplitTemplateComponent', () => {
  let component: SplitTemplateComponent;
  let fixture: ComponentFixture<SplitTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
