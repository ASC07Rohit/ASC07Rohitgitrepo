import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  email: string = ' ';
  password: string = '';

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(loginForm: any): void {
    if (loginForm.valid) {
      const email = 'rohit@gmail.com';
      const password = '123';

      if (this.email === email && this.password === password) {
        sessionStorage.setItem('loggedin', 'yes');
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
        
        this.router.navigate(['/']);
      } else {
        alert('Invalid credential');
      }
    } else {
      alert('fill out the form correctly');
    }
  }
}
