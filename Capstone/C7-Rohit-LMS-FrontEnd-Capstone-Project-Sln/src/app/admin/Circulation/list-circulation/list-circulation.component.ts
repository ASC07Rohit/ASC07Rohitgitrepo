import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberService } from '../../../shared/service/member.service';
import { CatalogueService } from '../../../shared/service/catalogue.service';
import { CirculationService } from '../../../shared/service/circulation.service';
import { Circulation } from '../../../shared/model/circulation.model';
import { Member } from '../../../shared/model/member.model';
import { Catalogue } from '../../../shared/model/catalogue.model';

@Component({
  selector: 'app-list-circulation',
  templateUrl: './list-circulation.component.html',
  styleUrl: './list-circulation.component.css',
})
export class ListCirculationComponent implements OnInit {
  circulations: Circulation[] = [];
  members: Member[] = [];
  catalogues: Catalogue[] = [];

  constructor(
    private router: Router,
    private memberService: MemberService,
    private catalogueService: CatalogueService,
    private circulationService: CirculationService
  ) {}

  ngOnInit(): void {
    this.loadCirculations();
    this.loadMembers();
    this.loadCatalogues();
  }

  loadCirculations(): void {
    this.circulationService.getCirculations().subscribe((data) => {
      this.circulations = data;
    });
  }

  loadMembers(): void {
    this.memberService.getMember().subscribe((data) => {
      this.members = data;
    });
  }

  loadCatalogues(): void {
    this.catalogueService.getCatalogue().subscribe((data) => {
      this.catalogues = data;
    });
  }

  getMemberName(memberId: string): string {
    const member = this.members.find((m) => m.id === memberId);
    return member ? member.name : 'Unknown';
  }

  getCatalogueTitle(catalogueId: string): string {
    const catalogue = this.catalogues.find((c) => c.id === catalogueId);
    return catalogue ? catalogue.title : 'Unknown';
  }

  returnCatalogue(circulation: Circulation): void {
    if (circulation.id !== undefined) {
      const returnDate = new Date().toISOString().split('T')[0];
      circulation.borrowDate = returnDate;
      this.circulationService.returnBook(circulation).subscribe(() => {
        this.loadCirculations();
      });
    }
  }

  navigateAddToCirculation() {
    this.router.navigate(['/circulation/add-circulation']);
  }

  deleteCirculation(id: string): void {
    const confirmation = confirm(
      'Are you sure want to delete the circulation ? '
    );

    if (confirmation) {
      this.circulationService.deleteCirculation(id).subscribe(() => {
        this.loadCirculations();

        alert('Circulation Deleted Successfully');
      });
    }
  }
}
