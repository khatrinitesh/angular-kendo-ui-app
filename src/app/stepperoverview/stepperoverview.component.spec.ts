import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperoverviewComponent } from './stepperoverview.component';

describe('StepperoverviewComponent', () => {
  let component: StepperoverviewComponent;
  let fixture: ComponentFixture<StepperoverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperoverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
