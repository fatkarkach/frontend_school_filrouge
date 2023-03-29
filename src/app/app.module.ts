import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './Home/navbar/navbar.component';
import { HomepageComponent } from './Home/homepage/homepage.component';
import { ServiceHomeComponent } from './Home/service-home/service-home.component';
import { PartenairesComponent } from './Home/partenaires/partenaires.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AboutusComponent } from './Home/aboutus/aboutus.component';
import { ChoixsectionComponent } from './Home/choixsection/choixsection.component';
import { ActivitesComponent } from './Home/activites/activites.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { NavbarpageComponent } from './navbarpage/navbarpage.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    ServiceHomeComponent,
    PartenairesComponent,
    AboutusComponent,
    ChoixsectionComponent,
    ActivitesComponent,
    FooterComponent,
    LoginComponent,
    NavbarpageComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
