import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Databinding1Component } from './databinding1.component';

describe('Databinding1Component', () => {
  let component: Databinding1Component;
  let fixture: ComponentFixture<Databinding1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Databinding1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Databinding1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
