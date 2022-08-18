import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatcolorpickeroverviewComponent } from './flatcolorpickeroverview.component';

describe('FlatcolorpickeroverviewComponent', () => {
  let component: FlatcolorpickeroverviewComponent;
  let fixture: ComponentFixture<FlatcolorpickeroverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatcolorpickeroverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatcolorpickeroverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
