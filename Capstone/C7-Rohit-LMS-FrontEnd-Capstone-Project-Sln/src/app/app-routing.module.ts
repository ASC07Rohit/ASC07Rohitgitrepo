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

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: UserLoginComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'user-signup', component: UserSignupComponent },
  { path: 'catalogues/list-catalogues', component: ListCatalogueComponent },
  { path: 'catalogues/add-catalogue', component: AddCatalogueComponent },
  { path: 'catalogues/update/:id', component: UpdateCatalogueComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'members/list-members', component: ListMemberComponent },
  { path: 'members/add-member', component: AddMemberComponent },
  { path: 'circulation/list-circulation', component: ListCirculationComponent },
  { path: 'circulation/add-circulation', component: AddCirculationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
