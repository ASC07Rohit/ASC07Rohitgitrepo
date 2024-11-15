import { Component } from '@angular/core';
import { AuthGuardService } from '../service/auth-guard.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  constructor(protected authService: AuthGuardService) {}

  logout() {
    this.authService.logout();
  }
}
