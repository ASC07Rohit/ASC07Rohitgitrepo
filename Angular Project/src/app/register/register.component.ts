import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  name: string = '';
  age: number | null = null;
  id?: number;
  city: string = '';
  email: string = ''
  state: string = ''
  address: any;
  pin: any;
  contactNo: any;

  constructor(private userService: UserService, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      const user: User = navigation?.extras.state['user'];
      this.name = user.name;
      this.age = user.age;
      this.id = user.id;
      this.city = user.city;
      this.email = user.email;
      this.state = user.state;
      this.address = user.address;
      this.pin = user.pin;
      this.contactNo = user.contactNo;
    }
  }

  onSubmit() {
    const user: User = { id: this.id, name: this.name, age: this.age, city:this.city, email: this.email, state:this.state, address:this.address, pin:this.pin, contactNo:this.contactNo};

    if (this.id) {
      this.userService.updateUser(user).subscribe(() => {
        alert('User Updated !!');
        this.name = '';
        this.age = null;
        this.id = undefined;
        this.city = '';
        this.email = '';
        this.state = '';
        this.address = '';        
        this.pin = '';
        this.contactNo = '';
      });
    } else {
      this.userService.createUser(user).subscribe(() => {
        alert('User Created !!!');
        this.name = '';
        this.age = null;
        this.id = undefined;
        this.city = '';
        this.email = '';
        this.state = '';
        this.address = '';
        this.pin = '';
        this.contactNo = '';
      });
    }
  }
}
