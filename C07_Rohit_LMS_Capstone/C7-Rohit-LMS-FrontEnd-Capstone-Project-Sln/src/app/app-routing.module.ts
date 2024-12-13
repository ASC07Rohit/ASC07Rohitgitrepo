import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserSignupComponent } from './user/user-signup/user-signup.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AddCatalogueComponent } from './admin/Catalogues/add-catalogue/add-catalogue.component';
import { ListCatalogueComponent } from './admin/Catalogues/list-catalogue/list-catalogue.component';
import { ListMemberComponent } from './admin/Members/list-member/list-member.component';
import { AddMemberComponent } from './admin/Members/add-member/add-member.component';
import { AddCirculationComponent } from './admin/Circulation/add-circulation/add-circulation.component';
import { ListCirculationComponent } from './admin/Circulation/list-circulation/list-circulation.component';
import { HomeComponent } from './home/home.component';
import { UpdateCatalogueComponent } from './admin/Catalogues/update-catalogue/update-catalogue.component';
import { AdminListComponent } from './admin/admin-list/admin-list.component';
import { AuthGuardService } from './shared/service/auth-guard.service';
import { ListReviewComponent } from './admin/Review/list-review/list-review.component';
import { AddReviewComponent } from './admin/Review/add-review/add-review.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate:[AuthGuardService] },
  { path: '', component: UserLoginComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'user-signup', component: UserSignupComponent},
  { path: 'catalogues/list-catalogues', component: ListCatalogueComponent, canActivate:[AuthGuardService] },
  { path: 'catalogues/add-catalogue', component: AddCatalogueComponent, canActivate:[AuthGuardService] },
  { path: 'catalogues/update/:id', component: UpdateCatalogueComponent, canActivate:[AuthGuardService] },
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuardService] },
  { path: 'members/list-members', component: ListMemberComponent, canActivate:[AuthGuardService] },
  { path: 'members/add-member', component: AddMemberComponent, canActivate:[AuthGuardService] },
  { path: 'circulation/list-circulation', component: ListCirculationComponent, canActivate:[AuthGuardService] },
  { path: 'circulation/add-circulation', component: AddCirculationComponent,canActivate: [AuthGuardService] },
  { path: 'admin-list', component:AdminListComponent, canActivate:[AuthGuardService]},
  { path: 'review', component:ListReviewComponent, canActivate:[AuthGuardService]},
   {path:'add-review', component: AddReviewComponent, canActivate:[AuthGuardService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
