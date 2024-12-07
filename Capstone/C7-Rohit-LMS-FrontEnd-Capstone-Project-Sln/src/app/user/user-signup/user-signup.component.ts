import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrl: './user-signup.component.css',
})
export class UserSignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      fullName: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      // confirmPassword: ['', Validators.required, Validators.minLength(6)],
    });
  }

  onSubmit() {
    alert('form Submitted');
    console.log('click');
    if (this.signupForm.valid) {
      console.log('Form submitted', this.signupForm.value);
      this.signupForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }
}
