import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router} from "@angular/router";
const  USER_id="id";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router:Router) {}


/*register un etablissement*/
  register(user:any){
    return this.http.post("http://localhost:8080/api/faho/register",user)
  }
  /*login*/
  id_user: any;
  resultat:any;
  resultat_data:any;
  /*login*/
  login(email: string, password: string): Observable<any> {
    this.resultat= this.http.post(
      ' http://localhost:8080/api/faho/authenticate',
      {
        email,
        password,
      },
      httpOptions
    );
    this.resultat_data =this.resultat.subscribe({
      next: (data: { token: any; id: any; }) => {
        if(data.token){
          this.id_user=data.id;
          console.log(this.id_user)
        }
      },
      error: (err: any) => {
        console.log("machi mzyan");
      }
    });

    return this.resultat;
  }
  /*register un activites*/

  add_activites(activites:any){
    return this.http.post("http://localhost:8080/api/faho/activite/auth/save",activites)
  }
  /*getall  services */
  getALLactvites()
  {
    const user = window.sessionStorage.getItem(USER_id);
    console.log(user)
    return this.http.get("http://localhost:8080/api/faho/activite/auth/getallmaactivites/"+user,
      httpOptions
    );
  }
/*
  get all etablissement
*/
  getALLetablissement()
  {
    return this.http.get("http://localhost:8080/api/faho/activite/auth/getetablissement",
      httpOptions
    );
  }

}
