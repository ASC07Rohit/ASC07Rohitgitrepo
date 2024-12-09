import { Component, OnInit } from '@angular/core';
import { Member } from '../../../shared/model/member.model';
import { MemberService } from '../../../shared/service/member.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrl: './add-member.component.css',
})
export class AddMemberComponent implements OnInit {
  memberShipForm: FormGroup;
  members: Member[] = [];

  constructor(
    private memberService: MemberService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.memberShipForm = this.fb.group({
      name: ['', Validators.required],
      contactNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      memberShipType: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  generateUniqueId(memberName: string): string {
    const lastCounter =
      Number(localStorage.getItem(`${memberName}IdCounter`)) || 1;
    const uniqueNumber = lastCounter.toString().padStart(4, '0');
    const id = `${memberName.charAt(0).toUpperCase()}${uniqueNumber}`;
    localStorage.setItem(
      `${memberName}IdCounter`,
      (lastCounter + 1).toString()
    );

    return id;
  }

  onSubmit(): void {
    if (this.memberShipForm.valid) {
      const newMember = {
        id: this.generateUniqueId('member'),
        ...this.memberShipForm.value,
      } as Member;

      this.memberService.addMember(newMember).subscribe((member) => {
        this.members.push(member);
        console.log('Member data: ', this.memberShipForm.value);
        this.memberShipForm.reset();
        alert('done');
        this.router.navigate(['/members/list-members']);
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
