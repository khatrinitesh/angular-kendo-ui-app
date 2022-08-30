import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionoverviewComponent } from './expansionoverview.component';

describe('ExpansionoverviewComponent', () => {
  let component: ExpansionoverviewComponent;
  let fixture: ComponentFixture<ExpansionoverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpansionoverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
