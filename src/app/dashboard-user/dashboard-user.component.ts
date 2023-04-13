import {Component, OnInit} from '@angular/core';
import {AuthService} from "../service/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent  implements OnInit  {
 /* add activites*/
  file: any;
  id:any;

  selectimage(e: any) {
    this.file = e.target.files[0];
    console.log(this.file)
  }

  activites={
    nome_activites: '',
    description: '',
    date_activites: '',
    duree: '',
    ville: '',
    adresse: '',
  }


  ajouteractivites(){
    let formdata=new FormData();
    this.id=window.sessionStorage.getItem("id");
    formdata.append('nome_activites',this.activites.nome_activites);
    formdata.append('description',this.activites.description);
    formdata.append('adresse',this.activites.adresse);
    formdata.append('date_activites',this.activites.date_activites);
    formdata.append('duree',this.activites.duree);
    formdata.append('ville',this.activites.ville);
    formdata.append('adresse',this.activites.adresse);
    formdata.append('validation'," non");
    formdata.append('id_user',this.id);
    formdata.append('file',this.file);

    this._shared.add_activites(formdata)
      .subscribe(
        res=>{
          this.activites={
            nome_activites: '',
            description: '',
            date_activites: '',
            duree: '',
            ville: '',
            adresse: '',

          }

          console.log(res);
          this.reloadPage();        },
        err=>{
          console.log(err);
        }
      );
  }
  reloadPage(): void {
    window.location.reload();
  }
  /* get activites*/
  allactivites:any;
  ngOnInit() :void{
    this._shared.getALLactvites().subscribe(
      res=>{
        console.log(res);
        this.allactivites=res;
      },
      err=>{
        console.log(err);

      }
    )
  }


  constructor(public  _shared:AuthService,private act: ActivatedRoute,private router:Router) {
  }

}
