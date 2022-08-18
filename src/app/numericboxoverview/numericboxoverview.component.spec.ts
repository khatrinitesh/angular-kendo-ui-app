import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericboxoverviewComponent } from './numericboxoverview.component';

describe('NumericboxoverviewComponent', () => {
  let component: NumericboxoverviewComponent;
  let fixture: ComponentFixture<NumericboxoverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumericboxoverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumericboxoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
