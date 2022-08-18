import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppearancedbComponent } from './appearancedb.component';

describe('AppearancedbComponent', () => {
  let component: AppearancedbComponent;
  let fixture: ComponentFixture<AppearancedbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppearancedbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppearancedbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
