import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiobuttonoverviewComponent } from './radiobuttonoverview.component';

describe('RadiobuttonoverviewComponent', () => {
  let component: RadiobuttonoverviewComponent;
  let fixture: ComponentFixture<RadiobuttonoverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadiobuttonoverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiobuttonoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
