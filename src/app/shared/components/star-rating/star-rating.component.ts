import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent implements OnInit {
  @Input() rating: number = 0; // Input property to receive the product's rating
  stars: number[] = [];

  ngOnInit() {
    this.calculateStarRating();
  }

  private calculateStarRating() {
    const numStars = 5; // Total number of stars
    const fullStars = Math.floor(this.rating);
    const partialStar = this.rating - fullStars;

    for (let i = 0; i < numStars; i++) {
      if (i < fullStars) {
        this.stars.push(100); // Fully filled star
      } else if (i === fullStars && partialStar > 0) {
        // Calculate partial fill as a gradient from gray to yello
        this.stars.push(partialStar * 100);
      } else {
        this.stars.push(0); // Unfilled star
      }
    }
  }
}
