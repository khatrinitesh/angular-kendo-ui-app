import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DboverviewComponent } from './dboverview.component';

describe('DboverviewComponent', () => {
  let component: DboverviewComponent;
  let fixture: ComponentFixture<DboverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DboverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DboverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
