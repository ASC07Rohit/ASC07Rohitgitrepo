import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'; // Import FormsModule
import { UserService } from '../../service/user.service';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-add-user',
  standalone: true, // Enable standalone component
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  imports: [FormsModule], // Import FormsModule here
})
export class AddUserComponent {
  constructor(private userService: UserService) {}

  // Method to handle form submission
  onSubmit(form: NgForm) {
    const newUser: User = {
      fname: form.value.fname,
      lname: form.value.lname,
      age: form.value.age,
      salary: form.value.salary,
      city: form.value.city,
      pin: form.value.pin,
      date: form.value.date,
    };

    this.userService.addUser(newUser).subscribe(() => {
      form.reset(); // Reset form after adding the user
      alert('User added successfully');
    });
  }
}
