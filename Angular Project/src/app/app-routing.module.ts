import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ListUsersComponent } from './list-user/list-user.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { AuthGuardService } from '../service/auth-guard.service';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'list-all-users',
    component: ListUsersComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'update-user/:id', component: UpdateUserComponent },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
