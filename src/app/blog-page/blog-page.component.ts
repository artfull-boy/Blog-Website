import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewsLetterComponent } from '../home/news-letter/news-letter.component';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [RouterModule,NewsLetterComponent],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.css'
})
export class BlogPageComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  public onClick(elementId: string): void { 
      this.viewportScroller.scrollToAnchor(elementId);
  }
  likeClicked = false;
  dislikeClicked = false;

  toggleLike() {
      this.likeClicked = !this.likeClicked;
      if (this.likeClicked && this.dislikeClicked) {
          this.dislikeClicked = false;
      }
      // Additional operations (API call, etc.)
  }

  toggleDislike() {
      this.dislikeClicked = !this.dislikeClicked;
      if (this.dislikeClicked && this.likeClicked) {
          this.likeClicked = false;
      }
      // Additional operations (API call, etc.)
  }
}
