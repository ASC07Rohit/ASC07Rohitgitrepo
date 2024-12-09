import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CatalogueService } from '../../../shared/service/catalogue.service';
import { Catalogue } from '../../../shared/model/catalogue.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogue',
  templateUrl: './add-catalogue.component.html',
  styleUrl: './add-catalogue.component.css',
})
export class AddCatalogueComponent implements OnInit {
  catalogueForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private catalogueService: CatalogueService,
    private router: Router
  ) {
    this.catalogueForm = this.fb.group({
      id: [{ value: '', disabled: true }],
      title: ['', Validators.required],
      author: ['', Validators.required],
      genre: ['', Validators.required],
      isbn: ['', Validators.required],
      availability: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  generateUniqueId(tableName: string): string {
    
    const lastCounter = Number(localStorage.getItem(`${tableName}IdCounter`)) || 1;
    const uniqueNumber = lastCounter.toString().padStart(4, '0');
    const id = `${tableName.charAt(0).toUpperCase()}${uniqueNumber}`;
    localStorage.setItem(`${tableName}IdCounter`, (lastCounter + 1).toString());

    return id;
  }

  onSubmit(): void {
    if (this.catalogueForm.valid) {
      const newCatalogue: Catalogue = {
        id:this.generateUniqueId('catalogue'),
        ...this.catalogueForm.value,
      };

      this.catalogueService
        .addCatalogue(newCatalogue)
        .subscribe((catalogue) => {
          console.log('Catalogue data: ', this.catalogueForm.value);
          this.catalogueForm.reset();
          alert('Catalogue added Successfully');
          this.router.navigate(['/catalogues/list-catalogues']);
        });
    } else {
      console.log('Form is invalid');
    }
  }
  
}
