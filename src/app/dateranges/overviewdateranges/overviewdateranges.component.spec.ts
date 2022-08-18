import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewdaterangesComponent } from './overviewdateranges.component';

describe('OverviewdaterangesComponent', () => {
  let component: OverviewdaterangesComponent;
  let fixture: ComponentFixture<OverviewdaterangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewdaterangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewdaterangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
