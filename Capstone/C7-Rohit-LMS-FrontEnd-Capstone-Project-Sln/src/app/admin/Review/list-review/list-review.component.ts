import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../../shared/service/review.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-review',
  templateUrl: './list-review.component.html',
  styleUrls: ['./list-review.component.css'],
})
export class ListReviewComponent implements OnInit {
  reviews: any[] = [];

  constructor(private reviewService: ReviewService, private router: Router) {}

  ngOnInit(): void {
    this.loadReviews();
  }

  loadReviews(): void {
    this.reviewService.getReviews().subscribe(
      (data) => {
        this.reviews = data;
      },
      (error) => {
        console.error('Error loading reviews', error);
      }
    );
  }

  navigateToReview() {
    this.router.navigate(['/add-review']);
  }

  deleteReview(id: string) {
    const confirmation = confirm('Are you sure want to Delete the Review ?');
    if (confirmation) {
      this.reviewService.deletReview(id).subscribe(() => {
        this.loadReviews();
        alert('Review Deleted Successfully');
      });
    }
  }
}
