import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReviewService } from '../../../shared/service/review.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css'],
})
export class AddReviewComponent implements OnInit {
  reviewForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private reviewService: ReviewService,
    private router: Router
  ) {
    this.reviewForm = this.fb.group({
      fullName: [''],
      feedback: [''],
    });
  }

  ngOnInit(): void {}

  generateUniqueId(reviewTable: string): string {
    const lastCounter =
      Number(localStorage.getItem(`${reviewTable}IdCounter`)) || 1;
    const uniqueNumber = lastCounter.toString().padStart(4, '0');
    const id = `${reviewTable.charAt(0).toUpperCase()}${uniqueNumber}`;
    localStorage.setItem(
      `${reviewTable}IdCounter`,
      (lastCounter + 1).toString()
    );

    return id;
  }

  onSubmit(): void {
    if (this.reviewForm.valid) {
      const formData = {
        ...this.reviewForm.value,
        id: this.generateUniqueId('review'),
      };

      this.reviewService.addReview(formData).subscribe(() => {
        // alert('Review submitted successfully');
        this.reviewForm.reset();
        this.router.navigate(['/review']);
      });
    }
  }
}
