import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { User } from '../../model/user.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  name: string = '';
  // age: number | null = null;
  id?: number;
  city: string = '';
  email: string = '';
  password: string = '';
  state: string = '';
  address: any;
  // pin: any;
  // contactNo: any;

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    const user: User = {
      id: this.id,
      name: this.name,
      // age: this.age,
      city: this.city,
      email: this.email,
      password: this.password,
      state: this.state,
      address: this.address,
      // pin: this.pin,
      // contactNo: this.contactNo,
    };

    this.userService.createUser(user).subscribe(() => {
      Swal.fire({
        title: 'User Registered Successfully',
        icon: 'success',
      });

      this.router.navigate(['login']);
    });
  }
}
