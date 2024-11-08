import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { UserService } from '../../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css',
})
export class UpdateUserComponent implements OnInit {
  id: any = 0;
  user: User = new User();

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.userService.getUserById(this.id).subscribe(
      (searchedUser) => {
        this.user = searchedUser;
      },
      (error) => console.error(error)
    );
  }

  updateUser(): void {
    this.userService.updateUser(this.id, this.user).subscribe(
      (response) => {
        Swal.fire({
          title: 'Form Updated Successfully',
          icon: 'success',
        });
        console.log('User updated successfully:', response);
        this.router.navigate(['/list-all-users']);
      },
      (error) => {
        console.error('Error updating user:', error);
      }
    );
  }
}
