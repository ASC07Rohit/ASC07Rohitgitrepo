import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css',
})
export class UserLoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
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

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      const mockCredentials = {
        email: 'admin@gmail.com',
        password: 'Admin@123',
      };

      if (
        email === mockCredentials.email &&
        password === mockCredentials.password
      ) {
        // sessionStorage.setItem('isLoggedIn', 'true');
        // sessionStorage.setItem('AdminEmail', email);
        alert('Login successful');
        this.loginForm.reset();
        this.router.navigate(['/home']);

      } else {
        alert('Invalid credential please try again');
      }
    } else {
      console.log('Invalid Form');
    }
  }

  isLoggedIn():boolean{
    return sessionStorage.getItem('isLoggedIn') === 'true';
  }

  logout(){
    sessionStorage.clear();
    alert('Logged out successfully');
  }

  navigateToUpdateForm(){
    console.log("Click 1");
    this.router.navigate(['/user-signup']);
    console.log("Click 2");
  }

}
