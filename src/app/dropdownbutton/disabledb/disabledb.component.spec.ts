import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledbComponent } from './disabledb.component';

describe('DisabledbComponent', () => {
  let component: DisabledbComponent;
  let fixture: ComponentFixture<DisabledbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisabledbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabledbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
