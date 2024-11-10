import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUsersComponent implements OnInit {
  data: User[] = [];
  filteredData: User[] = [];
  searchTerm: string = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.userService.getUsers().subscribe((response) => {
      this.data = response;
      this.filteredData = response;
    });
  }

  onSearch() {
    this.filteredData = this.data.filter((user) =>
      user.name
        .toLocaleLowerCase()
        .includes(this.searchTerm.toLocaleLowerCase())
    );
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(() => {
      this.data = this.data.filter((user) => user.id !== id);
    });
  }

  updateUser(userId: any | undefined): void {
    if (userId !== undefined) {
      this.router.navigate(['/update-user', userId]);
    } else {
      console.log('Employee ID is undefined');
    }
  }
}
