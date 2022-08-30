import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingArticleComponent } from './trending-article.component';

describe('TrendingArticleComponent', () => {
  let component: TrendingArticleComponent;
  let fixture: ComponentFixture<TrendingArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
