import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewfabtnComponent } from './overviewfabtn.component';

describe('OverviewfabtnComponent', () => {
  let component: OverviewfabtnComponent;
  let fixture: ComponentFixture<OverviewfabtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewfabtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewfabtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
