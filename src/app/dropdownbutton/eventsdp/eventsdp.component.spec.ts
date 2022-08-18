import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsdpComponent } from './eventsdp.component';

describe('EventsdpComponent', () => {
  let component: EventsdpComponent;
  let fixture: ComponentFixture<EventsdpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsdpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
