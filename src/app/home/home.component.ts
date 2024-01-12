import { Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { PopularBlogComponent } from './popular-blog/popular-blog.component';
import { AllBlogsComponent } from './all-blogs/all-blogs.component';
import { NewsLetterComponent } from './news-letter/news-letter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent, PopularBlogComponent,AllBlogsComponent,NewsLetterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
