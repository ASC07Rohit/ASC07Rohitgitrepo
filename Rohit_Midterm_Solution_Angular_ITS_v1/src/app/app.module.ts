import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { AddIssueComponent } from './add-issue/add-issue.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { UpdateIssueComponent } from './update-issue/update-issue.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AddIssueComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    UpdateIssueComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
