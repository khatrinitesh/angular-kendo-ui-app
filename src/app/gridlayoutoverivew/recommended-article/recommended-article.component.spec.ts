import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedArticleComponent } from './recommended-article.component';

describe('RecommendedArticleComponent', () => {
  let component: RecommendedArticleComponent;
  let fixture: ComponentFixture<RecommendedArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendedArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
