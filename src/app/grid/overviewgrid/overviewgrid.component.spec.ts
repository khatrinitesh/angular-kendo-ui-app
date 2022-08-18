import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewgridComponent } from './overviewgrid.component';

describe('OverviewgridComponent', () => {
  let component: OverviewgridComponent;
  let fixture: ComponentFixture<OverviewgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
