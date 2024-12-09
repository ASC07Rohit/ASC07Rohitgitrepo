import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogueService } from '../../../shared/service/catalogue.service';
import { Catalogue } from '../../../shared/model/catalogue.model';

@Component({
  selector: 'app-list-catalogue',
  templateUrl: './list-catalogue.component.html',
  styleUrl: './list-catalogue.component.css',
})
export class ListCatalogueComponent implements OnInit{
  catalogues: Catalogue[] = [];
  //searchTitle: string = ' ';
  searchInput: string = '';
  searchPerformed= false;

  constructor(
    private router: Router,
    private catalogueService: CatalogueService
  ) {}

  ngOnInit(): void {
    this.loadCatalogues();
  }

  loadCatalogues(): void {
    this.catalogueService.getCatalogue().subscribe((data) => {
      this.catalogues = data;
    });
  }

  navigateToAddCatalogue(): void {
    this.router.navigate(['/catalogues/add-catalogue']);
  }

  deleteCatalogue(id: string): void {
    const confirmation = confirm(
      'Are you sure you want to delete this catalogue ?'
    );
    if (confirmation) {
      this.catalogueService.deleteCatalogue(id).subscribe(() => {
        this.loadCatalogues();
        alert('Catalogue Deleted Successfully');
      });
    }
  }

  navigateToUpdate(id: string): void {
    console.log('Click');
    this.router.navigate(['/catalogues/update', id]);
  }

  onSearch(): void {
    console.log('search Data: ', this.searchInput);

    this.catalogueService.searchCatalogueByTitle(this.searchInput).subscribe(
      (data) => {
        console.log(">>", data)
        this.catalogues = data;
        this.searchPerformed = true;
      },
      (error) => {
        console.log('Error: ', error);
        this.searchPerformed = true;
      }
    );

    
  }
}
