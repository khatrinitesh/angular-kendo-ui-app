import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TickoverviewComponent } from './tickoverview.component';

describe('TickoverviewComponent', () => {
  let component: TickoverviewComponent;
  let fixture: ComponentFixture<TickoverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TickoverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TickoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
