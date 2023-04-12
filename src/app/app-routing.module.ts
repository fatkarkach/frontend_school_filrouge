import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from "@angular/router";
import {HomepageComponent} from "./Home/homepage/homepage.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AllactivitesComponent} from "./allactivites/allactivites.component";
import {ContactComponent} from "./contact/contact.component";
import {DashboardUserComponent} from "./dashboard-user/dashboard-user.component";
import {ValidateactivitesComponent} from "./dashbordadmin/validateactivites/validateactivites.component";
import {DashbordadminComponent} from "./dashbordadmin/dashbordadmin.component";

const routes:Routes=[
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomepageComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'activites',component:AllactivitesComponent},
  {path:'contact',component:ContactComponent},
  {path:'dashboarduser',component:DashboardUserComponent},
  {path:'validation',component:ValidateactivitesComponent},
  {path:'admin',component:DashbordadminComponent},

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
