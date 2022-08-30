import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelbaroverviewComponent } from './panelbaroverview.component';

describe('PanelbaroverviewComponent', () => {
  let component: PanelbaroverviewComponent;
  let fixture: ComponentFixture<PanelbaroverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelbaroverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelbaroverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
