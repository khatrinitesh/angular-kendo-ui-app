import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelsoverviewComponent } from './labelsoverview.component';

describe('LabelsoverviewComponent', () => {
  let component: LabelsoverviewComponent;
  let fixture: ComponentFixture<LabelsoverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelsoverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelsoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
