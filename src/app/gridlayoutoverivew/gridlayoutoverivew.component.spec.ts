import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridlayoutoverivewComponent } from './gridlayoutoverivew.component';

describe('GridlayoutoverivewComponent', () => {
  let component: GridlayoutoverivewComponent;
  let fixture: ComponentFixture<GridlayoutoverivewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridlayoutoverivewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridlayoutoverivewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
