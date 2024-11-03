import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ListUsersComponent } from './list-user/list-user.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'list', component: ListUsersComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
];
