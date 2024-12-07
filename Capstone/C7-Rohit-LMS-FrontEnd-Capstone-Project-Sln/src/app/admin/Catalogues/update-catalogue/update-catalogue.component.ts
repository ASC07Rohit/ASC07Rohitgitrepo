import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CatalogueService } from '../../../shared/service/catalogue.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Catalogue } from '../../../shared/model/catalogue.model';

@Component({
  selector: 'app-update-catalogue',
  templateUrl: './update-catalogue.component.html',
  styleUrl: './update-catalogue.component.css',
})
export class UpdateCatalogueComponent implements OnInit {
  updateCatalogueForm!: FormGroup;
  catalogueId: string = ''; // Initialize with an empty string or null if you prefer
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private catalogueService: CatalogueService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.updateCatalogueForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      genre: ['', Validators.required],
      isbn: ['', Validators.required],
      availability: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.catalogueId = this.route.snapshot.paramMap.get('id') || ''; // Get catalogue ID from the route

    this.loadCatalogueDetails();
  }

  loadCatalogueDetails(): void {
    this.isLoading = true;
    this.catalogueService.getCatalogueById(this.catalogueId).subscribe({
      next: (data) => {
        this.updateCatalogueForm.patchValue({
          title: data.title,
          author: data.author,
          genre: data.genre,
          isbn: data.isbn,
          availability: data.availability,
        });
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      },
    });
  }

  onSubmit(): void {
    if (this.updateCatalogueForm.invalid) {
      return;
    }

    const updatedCatalogue: Catalogue = {
      id: this.catalogueId,
      ...this.updateCatalogueForm.value,
    };

    console.log('update catalogue:', updatedCatalogue);

    this.isLoading = true;

    this.catalogueService
      .updateCatalogue(this.catalogueId, updatedCatalogue)
      .subscribe({
        next: () => {
          this.isLoading = false;
          alert('Catalogue Updated Successfully');
          this.router.navigate(['/catalogues/list-catalogues']);
        },
        error: () => {
          this.isLoading = false;
        },
      });
  }
}
