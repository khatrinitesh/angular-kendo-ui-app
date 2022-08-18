import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewdiComponent } from './overviewdi.component';

describe('OverviewdiComponent', () => {
  let component: OverviewdiComponent;
  let fixture: ComponentFixture<OverviewdiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewdiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
