import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
