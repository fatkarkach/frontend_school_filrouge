import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
const USER_KEY = 'auth-user', USER_id="id",USER_Role="role";

@Component({
  selector: 'app-navbaradmin',
  templateUrl: './navbaradmin.component.html',
  styleUrls: ['./navbaradmin.component.css']
})
export class NavbaradminComponent {
  constructor(private http: HttpClient, private router:Router) {}
  ngOnInit(): void {
    const KEY = window.sessionStorage.getItem(USER_KEY), id=window.sessionStorage.getItem(USER_id),role=window.sessionStorage.getItem(USER_Role);
    if (!KEY && !id && !role) {
      this.router.navigate(['/login']);
    }
  }
  logout(){
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.removeItem(USER_id);
    window.sessionStorage.removeItem(USER_Role);
    this.router.navigate(['/login']);
  }

}
