import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewfilterComponent } from './overviewfilter.component';

describe('OverviewfilterComponent', () => {
  let component: OverviewfilterComponent;
  let fixture: ComponentFixture<OverviewfilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewfilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
