import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitteroverviewComponent } from './splitteroverview.component';

describe('SplitteroverviewComponent', () => {
  let component: SplitteroverviewComponent;
  let fixture: ComponentFixture<SplitteroverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitteroverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitteroverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
