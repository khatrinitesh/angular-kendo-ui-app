import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextboxoverviewComponent } from './textboxoverview.component';

describe('TextboxoverviewComponent', () => {
  let component: TextboxoverviewComponent;
  let fixture: ComponentFixture<TextboxoverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextboxoverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextboxoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
