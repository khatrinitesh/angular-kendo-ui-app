import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitbuttonComponent } from "./splitbutton.component";

describe('SplitbuttonComponent', () => {
  let component: SplitbuttonComponent;
  let fixture: ComponentFixture<SplitbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SplitbuttonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
