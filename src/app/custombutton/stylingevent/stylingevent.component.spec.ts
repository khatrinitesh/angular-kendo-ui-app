import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StylingeventComponent } from './stylingevent.component';

describe('StylingeventComponent', () => {
  let component: StylingeventComponent;
  let fixture: ComponentFixture<StylingeventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylingeventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylingeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
