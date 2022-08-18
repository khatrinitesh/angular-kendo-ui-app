import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Popupitems1Component } from './popupitems1.component';

describe('Popupitems1Component', () => {
  let component: Popupitems1Component;
  let fixture: ComponentFixture<Popupitems1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Popupitems1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Popupitems1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
