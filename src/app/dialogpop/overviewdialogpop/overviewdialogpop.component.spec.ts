import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewdialogpopComponent } from './overviewdialogpop.component';

describe('OverviewdialogpopComponent', () => {
  let component: OverviewdialogpopComponent;
  let fixture: ComponentFixture<OverviewdialogpopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewdialogpopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewdialogpopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
