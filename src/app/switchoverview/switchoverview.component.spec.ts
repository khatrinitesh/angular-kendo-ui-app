import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchoverviewComponent } from './switchoverview.component';

describe('SwitchoverviewComponent', () => {
  let component: SwitchoverviewComponent;
  let fixture: ComponentFixture<SwitchoverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchoverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
