import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OvervieweeComponent } from './overviewee.component';

describe('OvervieweeComponent', () => {
  let component: OvervieweeComponent;
  let fixture: ComponentFixture<OvervieweeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvervieweeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OvervieweeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
