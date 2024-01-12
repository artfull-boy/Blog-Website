import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})

export class HeroSectionComponent{
  selectedTagIndex: number = 0;
  tags = [
    { count: 15, name: 'All' },
    { count: 4, name: 'Announcements' },
    { count: 7, name: 'Wellness' },
    { count: 1, name: 'Technology' },
    { count: 6, name: 'Environment' },
    { count: 2, name: 'HR Topics' },
    { count: 7, name: 'Virtual Machine' },
  ];

  selectedTags: Set<number> = new Set([0]); // Initially, only 'All' is selected

  selectTag(index: number): void {
    if (index === 0) {
      // If 'All' is selected, clear all other selections
      this.selectedTags.clear();
      this.selectedTags.add(0);
    } else {
      this.selectedTags.delete(0); // Remove 'All' from selection if any other tag is selected
      if (this.selectedTags.has(index)) {
        if (this.selectedTags.size === 1) {
          this.selectedTags.clear();
          this.selectedTags.add(0);
        } else {
          // Deselect if already selected
          this.selectedTags.delete(index);
        }
      } else {
        this.selectedTags.add(index); // Select the tag
      }
    }
  }

  isTagSelected(index: number): boolean {
    return this.selectedTags.has(index);
  }

}
