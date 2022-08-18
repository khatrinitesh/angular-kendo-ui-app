import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionmodeComponent } from './selectionmode.component';

describe('SelectionmodeComponent', () => {
  let component: SelectionmodeComponent;
  let fixture: ComponentFixture<SelectionmodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionmodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionmodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
