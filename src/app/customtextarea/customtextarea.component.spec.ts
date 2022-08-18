import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomtextareaComponent } from './customtextarea.component';

describe('CustomtextareaComponent', () => {
  let component: CustomtextareaComponent;
  let fixture: ComponentFixture<CustomtextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomtextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomtextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
