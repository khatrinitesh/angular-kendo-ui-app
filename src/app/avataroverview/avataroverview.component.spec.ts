import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvataroverviewComponent } from './avataroverview.component';

describe('AvataroverviewComponent', () => {
  let component: AvataroverviewComponent;
  let fixture: ComponentFixture<AvataroverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvataroverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvataroverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
