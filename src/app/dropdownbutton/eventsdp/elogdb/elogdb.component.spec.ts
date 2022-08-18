import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElogdbComponent } from './elogdb.component';

describe('ElogdbComponent', () => {
  let component: ElogdbComponent;
  let fixture: ComponentFixture<ElogdbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElogdbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElogdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
