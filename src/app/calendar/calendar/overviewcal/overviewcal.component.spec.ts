import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewcalComponent } from './overviewcal.component';

describe('OverviewcalComponent', () => {
  let component: OverviewcalComponent;
  let fixture: ComponentFixture<OverviewcalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewcalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewcalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
