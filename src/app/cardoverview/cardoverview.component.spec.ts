import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardoverviewComponent } from './cardoverview.component';

describe('CardoverviewComponent', () => {
  let component: CardoverviewComponent;
  let fixture: ComponentFixture<CardoverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardoverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
