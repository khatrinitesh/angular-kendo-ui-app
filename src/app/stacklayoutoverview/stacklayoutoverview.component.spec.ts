import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StacklayoutoverviewComponent } from './stacklayoutoverview.component';

describe('StacklayoutoverviewComponent', () => {
  let component: StacklayoutoverviewComponent;
  let fixture: ComponentFixture<StacklayoutoverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StacklayoutoverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StacklayoutoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
