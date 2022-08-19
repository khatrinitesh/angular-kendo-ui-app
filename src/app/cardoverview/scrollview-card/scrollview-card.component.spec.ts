import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollviewCardComponent } from './scrollview-card.component';

describe('ScrollviewCardComponent', () => {
  let component: ScrollviewCardComponent;
  let fixture: ComponentFixture<ScrollviewCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollviewCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
