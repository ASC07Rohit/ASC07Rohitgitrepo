import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {}

  onLogin() {
    this.userService.validateUser(this.email, this.password).subscribe((isValid) => {
      if (isValid) {
        alert('Login Successfully');
        this.router.navigate(['/']);
      } else {
        alert('Invalid credentials');
      }
    });
  }
}
