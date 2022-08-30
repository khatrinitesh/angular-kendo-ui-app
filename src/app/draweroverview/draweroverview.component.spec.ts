import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraweroverviewComponent } from './draweroverview.component';

describe('DraweroverviewComponent', () => {
  let component: DraweroverviewComponent;
  let fixture: ComponentFixture<DraweroverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraweroverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraweroverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
