import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddIssueComponent } from './add-issue/add-issue.component';
import { NgModule } from '@angular/core';
import { UpdateIssueComponent } from './update-issue/update-issue.component';
import { AuthGuardService } from './service/auth-guard.service';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'issues', component: DashboardComponent, canActivate:[AuthGuardService]},
  { path: 'add-issue', component: AddIssueComponent, canActivate:[AuthGuardService]},
  { path: 'update/:id', component: UpdateIssueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
