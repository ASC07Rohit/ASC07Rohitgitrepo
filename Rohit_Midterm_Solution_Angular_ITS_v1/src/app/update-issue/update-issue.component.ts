import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { dataService } from '../service/data.service';
import { Data } from '../model/data.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-update-issue',
  templateUrl: './update-issue.component.html',
  styleUrls: ['./update-issue.component.css'],
})
export class UpdateIssueComponent implements OnInit {
  issueId: number | undefined;  // Allow issueId to be undefined initially
  issue: Data = new Data();

  constructor(
    private route: ActivatedRoute,
    private dataService: dataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Extract issueId from route parameters
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.issueId = +id;  // Convert string to number
    }

    if (this.issueId !== undefined) {
      this.dataService.getIssue(this.issueId).subscribe(
        (data: Data) => {
          this.issue = data;
        },
        (error: HttpErrorResponse) => {
          console.error('Error fetching issue data', error);
        }
      );
    } else {
      console.error('No valid issueId found');
    }
  }

  // Handle form submission
  onSubmit(): void {
    // Ensure that issueId is a valid number before calling the update service
    if (this.issueId !== undefined) {
      this.updateIssue();
    } else {
      console.error('No valid issue ID found');
    }
  }

  updateIssue(): void {
    // Ensure that issueId is a valid number before calling the update service
    if (this.issueId !== undefined) {
      this.dataService.updateData(this.issueId, this.issue).subscribe(
        () => {
          alert('Issue updated successfully!');
          this.router.navigate(['/issues']);  // Navigate to the dashboard after update
        },
        (error: HttpErrorResponse) => {
          console.error('Error updating issue', error);
        }
      );
    } else {
      console.error('No issue ID found to update');
      // Optionally, show an error message to the user
    }
  }
}
