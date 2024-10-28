import { Component } from '@angular/core';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUsersComponent } from './list-user/list-user.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',  // Root component for the app
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule,AddUserComponent, ListUsersComponent]  // Import child components
})
export class AppComponent {
  showAddUser = false;
  showListUsers = false;

  displayAddUser() {
    this.showAddUser = true;
    this.showListUsers = false;
  }

  displayListUsers() {
    this.showListUsers = true;
    this.showAddUser = false;
  }
}
