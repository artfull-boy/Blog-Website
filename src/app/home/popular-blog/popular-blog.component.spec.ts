import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularBlogComponent } from './popular-blog.component';

describe('PopularBlogComponent', () => {
  let component: PopularBlogComponent;
  let fixture: ComponentFixture<PopularBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopularBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
