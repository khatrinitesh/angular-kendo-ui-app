import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownbuttonComponent } from './dropdownbutton.component';

describe('DropdownbuttonComponent', () => {
  let component: DropdownbuttonComponent;
  let fixture: ComponentFixture<DropdownbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
