import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  // standalone: true,
  // imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkLoginStatus();
  }

  checkLoginStatus(): void {
    this.isLoggedIn = sessionStorage.getItem('loggedIn') === 'yes';
  }

  logout(): void {
    sessionStorage.removeItem('loggedIn');
    this.isLoggedIn = false;

    this.router.navigate(['/']);
  }

  setLoginStatus(): void {
    sessionStorage.setItem('loggedIn', 'yes');
    this.isLoggedIn = true;
  }
}
