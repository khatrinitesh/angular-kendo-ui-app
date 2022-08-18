import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewmvcComponent } from './overviewmvc.component';

describe('OverviewmvcComponent', () => {
  let component: OverviewmvcComponent;
  let fixture: ComponentFixture<OverviewmvcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewmvcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewmvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
