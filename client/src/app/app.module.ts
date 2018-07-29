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
import { SeparatePeopleComponent } from './pages/people/separate-people/separate-people.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NewsOneComponent } from './pages/news-one/news-one.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PeopleComponent,
    ProjectsComponent,
    CastsComponent,
    NewsComponent,
    RentalComponent,
    RegistrationComponent,
    SeparatePeopleComponent,
    MainpageComponent,
    NewsOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LoginService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
