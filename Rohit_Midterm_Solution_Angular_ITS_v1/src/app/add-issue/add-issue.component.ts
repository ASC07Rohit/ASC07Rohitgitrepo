import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data } from '../model/data.model';
import { dataService } from '../service/data.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.css'],
})
export class AddIssueComponent implements OnInit {
  issueForm: FormGroup;

  constructor(private fb: FormBuilder, private dataService: dataService, private router:Router) {
    this.issueForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      priority: ['', Validators.required],
      assigned: ['', Validators.required],
      status: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.issueForm.valid) {
      const newIssue: Data = this.issueForm.value;
      this.dataService.addData(newIssue).subscribe((addedIssue) => {
        console.log('New issue added:', addedIssue);
        Swal.fire({
          icon: 'success',
          title: 'Issues Added successfully!',
          showConfirmButton: false,
          timer: 2000,
        });
        this.router.navigate(['/issues'])
        this.issueForm.reset();
      });
    }
  }
}
