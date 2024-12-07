import { Component, OnInit } from '@angular/core';
import { Member } from '../../../shared/model/member.model';
import { Catalogue } from '../../../shared/model/catalogue.model';
import { CirculationService } from '../../../shared/service/circulation.service';
import { MemberService } from '../../../shared/service/member.service';
import { CatalogueService } from '../../../shared/service/catalogue.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Circulation } from '../../../shared/model/circulation.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-circulation',
  templateUrl: './add-circulation.component.html',
  styleUrl: './add-circulation.component.css',
})
export class AddCirculationComponent implements OnInit {
  circulationForm: FormGroup;

  members: Member[] = [];
  catalogues: Catalogue[] = [];
  circulations: Circulation[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private circulationService: CirculationService,
    private memberService: MemberService,
    private catalogueService: CatalogueService
  ) {
    this.circulationForm = this.fb.group({
      memberId: ['', Validators.required],
      catalogueId: ['', Validators.required],
      borrowDate: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.memberService.getMember().subscribe((data) => {
      this.members = data;
    });

    this.catalogueService.getCatalogue().subscribe((data) => {
      this.catalogues = data;
    });
  }

  onSubmit(): void {
    if (this.circulationForm.valid) {
      
      const newCirculation: Circulation = {
        id: `C${Math.floor(1000 + Math.random() * 9000)}`,
        ...this.circulationForm.value,
        returnDate: null,
      };
  
      
      this.circulationService.addCirculation(newCirculation).subscribe(() => {
        this.router.navigate(['/circulation/list-circulation']);
      });
    }
  }
}
