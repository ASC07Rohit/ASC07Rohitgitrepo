import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      city: ['', Validators.required],
      state: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const newUser = this.registerForm.value;

      this.userService.createUser(newUser).subscribe(
        (user) => {
          Swal.fire({
            icon: 'success',
            title: 'User registered successfully!',
            showConfirmButton: false,
            timer: 2000,
          });

          this.router.navigate(['/login']);
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Error registering user',
            text: error.message || 'Something went wrong',
          });
        }
      );
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Please fill all required fields',
      });
    }
  }
}
