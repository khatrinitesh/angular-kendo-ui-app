import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarocdesComponent } from './barocdes.component';

describe('BarocdesComponent', () => {
  let component: BarocdesComponent;
  let fixture: ComponentFixture<BarocdesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarocdesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarocdesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
