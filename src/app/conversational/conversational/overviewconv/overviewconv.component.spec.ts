import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewconvComponent } from './overviewconv.component';

describe('OverviewconvComponent', () => {
  let component: OverviewconvComponent;
  let fixture: ComponentFixture<OverviewconvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewconvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewconvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
