import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data } from '../model/data.model';  // Ensure this model matches the data you're adding
import { dataService } from '../service/data.service';  // Your data service to interact with API

@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.css']
})
export class AddIssueComponent implements OnInit {
  issueForm: FormGroup;

  constructor(private fb: FormBuilder, private dataService: dataService) {
    this.issueForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      priority: ['', Validators.required],
      assigned: ['', Validators.required],
      date:['',Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.issueForm.valid) {
      const newIssue: Data = this.issueForm.value;
      this.dataService.addData(newIssue).subscribe((addedIssue) => {
        console.log('New issue added:', addedIssue);
        this.issueForm.reset();
      });
    }
  }
}
