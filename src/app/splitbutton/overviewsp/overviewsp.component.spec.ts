import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewspComponent } from './overviewsp.component';

describe('OverviewspComponent', () => {
  let component: OverviewspComponent;
  let fixture: ComponentFixture<OverviewspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
