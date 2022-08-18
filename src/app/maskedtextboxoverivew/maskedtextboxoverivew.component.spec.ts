import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskedtextboxoverivewComponent } from './maskedtextboxoverivew.component';

describe('MaskedtextboxoverivewComponent', () => {
  let component: MaskedtextboxoverivewComponent;
  let fixture: ComponentFixture<MaskedtextboxoverivewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaskedtextboxoverivewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaskedtextboxoverivewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
