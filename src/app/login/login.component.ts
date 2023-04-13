import { Component } from '@angular/core';
import {AuthService} from "../service/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  file: any;

  selectimage(e: any) {
    this.file = e.target.files[0];
    console.log(this.file)
  }

  user={
    nom_etablissement: '',
    ville: '',
    adresse: '',
    email: '',
    password: '',
    Description: '',
    num_tele: '',
    niveau_scolaire: '',
    type_ecole: '',
    validation: '',
  }


  ajouter(){
    let formdata=new FormData();

    formdata.append('nom_etablissement',this.user.nom_etablissement);
    formdata.append('ville',this.user.ville);
    formdata.append('adresse',this.user.adresse);
    formdata.append('email',this.user.email);
    formdata.append('password',this.user.password);
    formdata.append('Description',this.user.Description);
    formdata.append('num_tele',this.user.num_tele);
    formdata.append('niveau_scolaire',this.user.niveau_scolaire);
    formdata.append('type_ecole',this.user.type_ecole);
    formdata.append('validation',this.user.validation);
    formdata.append('file',this.file);

    this._shared.register(formdata)
      .subscribe(
        res=>{
          this.user={
            nom_etablissement: '',
            ville: '',
            adresse: '',
            email: '',
            password: '',
            Description: '',
            num_tele: '',
            niveau_scolaire: '',
            type_ecole: '',
            validation: '',
          }
          console.log(res);
          this.router.navigate(['/register']);
        },
        err=>{
          console.log(err);
        }
      );
  }
  constructor(public  _shared:AuthService,private act: ActivatedRoute,private router:Router) {
  }


}


