import { Component, OnInit } from '@angular/core';
import { Data } from '../model/data.model';
import { dataService } from '../service/data.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  data: Data[] = [];
  searchIssue: string = '';
  filteredData: Data[] = [];

  constructor(private dataService: dataService, private router: Router) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      (d: Data[]) => {
        this.data = d;
        this.filteredData = d;
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching data', error);
      }
    );
  }

  filterIssues(): void {
    if (!this.searchIssue) {
      this.filteredData = this.data;
    } else {
      this.filteredData = this.data.filter((issue) =>
        issue.title.toLowerCase().includes(this.searchIssue.toLowerCase())
      );
    }
  }

  deleteData(id: number | undefined): void {
    if (id !== undefined) {
      this.dataService.deleteData(id).subscribe(
        () => {
          this.data = this.data.filter((issue) => issue.id !== id);
          this.filteredData = this.filteredData.filter((issue) => issue.id !== id);
          alert('Issue deleted successfully!');
        },
        (error: HttpErrorResponse) => {
          console.error('Error deleting issue', error);
        }
      );
    }
  }

  editData(id: number): void {
    if (id !== undefined) {
      this.router.navigate(['/update', id]);
    } else {
      console.error('Invalid issue ID');
    }
  }
}
