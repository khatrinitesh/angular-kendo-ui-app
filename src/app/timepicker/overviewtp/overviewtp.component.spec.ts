import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewtpComponent } from './overviewtp.component';

describe('OverviewtpComponent', () => {
  let component: OverviewtpComponent;
  let fixture: ComponentFixture<OverviewtpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewtpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
