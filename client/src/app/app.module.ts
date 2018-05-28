import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import { LoginComponent } from './login/login.component';
import { PeopleComponent } from './pages/people/people.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CastsComponent } from './pages/casts/casts.component';
import { NewsComponent } from './pages/news/news.component';
import { RentalComponent } from './pages/rental/rental.component';
import { RegistrationComponent } from './registration/registration.component';
import {LoginService} from "../services/login.service";
import {AuthService} from "../services/auth.service";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PeopleComponent,
    ProjectsComponent,
    CastsComponent,
    NewsComponent,
    RentalComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [LoginService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }