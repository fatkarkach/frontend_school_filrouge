import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from "@angular/router";
import {HomepageComponent} from "./Home/homepage/homepage.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AllactivitesComponent} from "./allactivites/allactivites.component";
import {ContactComponent} from "./contact/contact.component";

const routes:Routes=[
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomepageComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'activites',component:AllactivitesComponent},
  {path:'contact',component:ContactComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
