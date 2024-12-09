import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../shared/service/admin.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css',
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup;

  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private adminService: AdminService
  ) {
    this.loginForm = this.fb.group({
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
  
  ngOnInit(): void {}

  onSubmit():void {
    
    if (this.loginForm.valid) {
    
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      this.adminService.getAdminData().subscribe((data) => {
        const user = data.find(
          (u) => u.email === email && u.password === password
        );
        if(user){
          sessionStorage.setItem('authStatus','true');
          alert('Successfully login');
          this.router.navigate(['/home']);
          }
          else{
            alert('Invalid login credential');
          }
      });
    } else {
      console.log('Invalid Form');
    }
  }

  navigateToUpdateForm() {
    this.router.navigate(['/user-signup']);
  }
}
