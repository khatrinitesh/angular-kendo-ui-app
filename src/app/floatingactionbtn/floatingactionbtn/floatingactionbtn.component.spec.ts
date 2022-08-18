import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingactionbtnComponent } from './floatingactionbtn.component';

describe('FloatingactionbtnComponent', () => {
  let component: FloatingactionbtnComponent;
  let fixture: ComponentFixture<FloatingactionbtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatingactionbtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingactionbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
