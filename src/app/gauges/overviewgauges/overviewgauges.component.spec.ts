import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewgaugesComponent } from './overviewgauges.component';

describe('OverviewgaugesComponent', () => {
  let component: OverviewgaugesComponent;
  let fixture: ComponentFixture<OverviewgaugesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewgaugesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewgaugesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
