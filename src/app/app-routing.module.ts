import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PeopleComponent} from "./pages/people/people.component";
import {ProjectsComponent} from "./pages/projects/projects.component";
import {CastsComponent} from "./pages/casts/casts.component";
import {NewsComponent} from "./pages/news/news.component";
import {RentalComponent} from "./pages/rental/rental.component";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";

const routes: Routes = [
  { path: '', redirectTo: 'people', pathMatch: 'full'},
  { path: 'login',component: LoginComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'people', component: PeopleComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'casts', component: CastsComponent},
  { path: 'news', component:  NewsComponent },
  { path: 'rental', component: RentalComponent}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }