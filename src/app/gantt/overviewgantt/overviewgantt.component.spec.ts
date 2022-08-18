import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewganttComponent } from './overviewgantt.component';

describe('OverviewganttComponent', () => {
  let component: OverviewganttComponent;
  let fixture: ComponentFixture<OverviewganttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewganttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewganttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
