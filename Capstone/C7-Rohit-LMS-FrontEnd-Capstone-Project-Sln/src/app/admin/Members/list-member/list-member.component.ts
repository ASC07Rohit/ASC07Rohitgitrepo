import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../../../shared/model/member.model';
import { MemberService } from '../../../shared/service/member.service';

@Component({
  selector: 'app-list-member',
  templateUrl: './list-member.component.html',
  styleUrl: './list-member.component.css',
})
export class ListMemberComponent implements OnInit {
  members: Member[] = [];

  constructor(private router: Router, private memberService: MemberService) {}

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers(): void {
    this.memberService.getMember().subscribe((data) => {
      this.members = data;
    });
  }
  navigateToAddMember() {
    this.router.navigate(['/members/add-member']);
  }

  deleteMember(id: string): void {
    const confirmation = confirm(
      'Are you sure you want to delete this member ?'
    );
    if (confirmation) {
      this.memberService.deleteMember(id).subscribe(() => {
        this.loadMembers();
        alert('Member Deleted Successfully');
      });
    }
  }
}
