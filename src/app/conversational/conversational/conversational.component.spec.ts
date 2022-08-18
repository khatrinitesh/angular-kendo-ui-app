import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationalComponent } from './conversational.component';

describe('ConversationalComponent', () => {
  let component: ConversationalComponent;
  let fixture: ComponentFixture<ConversationalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversationalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
