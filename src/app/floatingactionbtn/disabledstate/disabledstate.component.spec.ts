import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledstateComponent } from './disabledstate.component';

describe('DisabledstateComponent', () => {
  let component: DisabledstateComponent;
  let fixture: ComponentFixture<DisabledstateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisabledstateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabledstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
