import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../shared/service/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrl: './user-signup.component.css',
})
export class UserSignupComponent {
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      fullName: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
          ),
        ],
      ],
    });
  }

  generateUniqueId(adminTable: string): string {
    const lastCounter =
      Number(localStorage.getItem(`${adminTable}IdCounter`)) || 1;
    const uniqueNumber = lastCounter.toString().padStart(4, '0');
    const id = `${adminTable.charAt(0).toUpperCase()}${uniqueNumber}`;
    localStorage.setItem(
      `${adminTable}IdCounter`,
      (lastCounter + 1).toString()
    );

    return id;
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const formData = {
        ...this.signupForm.value,
        id: this.generateUniqueId('review'),
      };

      this.adminService.addAdminData(formData).subscribe(
        (data) => {
          console.log('Admin Data: ', data);
        },
        (error) => {
          console.log('Admin Error: ', error);
        }
      );
      alert('Successfully Register !!');
      this.signupForm.reset();
      this.router.navigate(['/user-login']);
    }
  }
}
