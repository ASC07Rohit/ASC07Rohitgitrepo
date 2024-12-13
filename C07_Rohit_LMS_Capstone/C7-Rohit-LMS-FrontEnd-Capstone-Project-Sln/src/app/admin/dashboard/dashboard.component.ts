import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../shared/service/member.service';
import { CatalogueService } from '../../shared/service/catalogue.service';
import { CirculationService } from '../../shared/service/circulation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  totalMembers: number = 0;
  totalCatalogues: number = 0;
  totalCirculations: number = 0;
  totalBorrowedBook: number = 0;
  totalReturnedBook: number = 0;

  constructor(
    private memberService: MemberService,
    private catalogueService: CatalogueService,
    private circularService: CirculationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    this.memberService.getTotalMembers().subscribe((count) => {
      this.totalMembers = count;
    });

    this.catalogueService.getTotalCatalogues().subscribe((count) => {
      this.totalCatalogues = count;
    });

    this.circularService.getTotalCirculations().subscribe((count) => {
      this.totalCirculations = count;
    });

    this.circularService.getTotalBorrowedBook().subscribe((count) => {
      this.totalBorrowedBook = count;
    });

    this.circularService.getTotalReturnedBook().subscribe((count) => {
      this.totalReturnedBook = count;
    });
  }

  getBook() {
    this.router.navigate(['/catalogues/list-catalogues']);
  }
  getMembers() {
    this.router.navigate(['/members/list-members']);
  }
  getCirculation() {
    this.router.navigate(['/circulation/list-circulation']);
  }
  getBorrowedBook() {
    this.router.navigate(['/circulation/list-circulation']);
  }
  getReturnedBook() {
    this.router.navigate(['/circulation/list-circulation']);
  }
}
