import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import {PeopleComponent} from "./pages/people/people.component";
import {ProjectsComponent} from "./pages/projects/projects.component";
import {CastsComponent} from "./pages/casts/casts.component";
import {NewsComponent} from "./pages/news/news.component";
import {RentalComponent} from "./pages/rental/rental.component";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {SeparatePeopleComponent} from "./pages/people/separate-people/separate-people.component";
import {MainpageComponent} from "./mainpage/mainpage.component";
import {NewsOneComponent} from "./pages/news-one/news-one.component";
import { OwnProfileComponent} from "./own-profile/own-profile.component";
import { AdvComponent} from "./pages/adv/adv.component";
import { RoolesComponent} from "./pages/rooles/rooles.component";
import { ContactsComponent} from "./pages/contacts/contacts.component";

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'people', component: PeopleComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'casts', component: CastsComponent},
  { path: 'news', component:  NewsComponent },
  { path: 'rental', component: RentalComponent},
  { path: 'separate-people', component: SeparatePeopleComponent},
  { path: 'main', component: MainpageComponent},
  { path: 'news-one', component: NewsOneComponent},
  { path: 'profile', component: OwnProfileComponent},
  { path: 'adv', component: AdvComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: 'rooles', component: RoolesComponent}
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
