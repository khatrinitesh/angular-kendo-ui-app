import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeslideroverviewComponent } from './rangeslideroverview.component';

describe('RangeslideroverviewComponent', () => {
  let component: RangeslideroverviewComponent;
  let fixture: ComponentFixture<RangeslideroverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeslideroverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeslideroverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
