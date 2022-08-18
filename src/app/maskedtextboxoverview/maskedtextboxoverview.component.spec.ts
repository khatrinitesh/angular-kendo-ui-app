import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskedtextboxoverviewComponent } from './maskedtextboxoverview.component';

describe('MaskedtextboxoverviewComponent', () => {
  let component: MaskedtextboxoverviewComponent;
  let fixture: ComponentFixture<MaskedtextboxoverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaskedtextboxoverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaskedtextboxoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
