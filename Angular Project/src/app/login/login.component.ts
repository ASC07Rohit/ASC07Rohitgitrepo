import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private navbarComponent: NavbarComponent
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}

  onLogin(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.userService.validateUser(email, password).subscribe((isValid) => {
        if (isValid) {
          this.navbarComponent.setLoginStatus();

          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });

          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully',
          });

          sessionStorage.setItem('loggedIn', 'yes');
          this.router.navigate(['/list-all-users']);
        } else {
          Swal.fire({
            icon: 'error',
            text: 'Invalid credentials',
          });
        }
      });
    } else {
      Swal.fire({
        icon: 'error',
        text: 'Please fill in the required fields correctly',
      });
    }
  }
}
