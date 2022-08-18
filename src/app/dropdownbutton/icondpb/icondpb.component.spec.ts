import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcondpbComponent } from './icondpb.component';

describe('IcondpbComponent', () => {
  let component: IcondpbComponent;
  let fixture: ComponentFixture<IcondpbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcondpbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcondpbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
