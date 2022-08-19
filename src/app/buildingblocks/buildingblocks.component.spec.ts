import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingblocksComponent } from './buildingblocks.component';

describe('BuildingblocksComponent', () => {
  let component: BuildingblocksComponent;
  let fixture: ComponentFixture<BuildingblocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingblocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingblocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
