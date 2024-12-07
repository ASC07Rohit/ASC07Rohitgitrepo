import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './core/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { CommonModule } from '@angular/common';
import { UserSignupComponent } from './user/user-signup/user-signup.component';
import { AddCatalogueComponent } from './admin/Catalogues/add-catalogue/add-catalogue.component';
import { HttpClientModule } from '@angular/common/http';
import { ListCatalogueComponent } from './admin/Catalogues/list-catalogue/list-catalogue.component';
import { AddMemberComponent } from './admin/Members/add-member/add-member.component';
import { ListMemberComponent } from './admin/Members/list-member/list-member.component';
import { AddCirculationComponent } from './admin/Circulation/add-circulation/add-circulation.component';
import { ListCirculationComponent } from './admin/Circulation/list-circulation/list-circulation.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UpdateCatalogueComponent } from './admin/Catalogues/update-catalogue/update-catalogue.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserLoginComponent,
    UserSignupComponent,
    AddCatalogueComponent,
    ListCatalogueComponent,
    AddMemberComponent,
    ListMemberComponent,
    AddCirculationComponent,
    ListCirculationComponent,
    HomeComponent,
    DashboardComponent,
    UpdateCatalogueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
