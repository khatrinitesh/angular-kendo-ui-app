import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconfabtnComponent } from './iconfabtn.component';

describe('IconfabtnComponent', () => {
  let component: IconfabtnComponent;
  let fixture: ComponentFixture<IconfabtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconfabtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconfabtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
