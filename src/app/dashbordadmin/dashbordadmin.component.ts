import {Component, OnInit} from '@angular/core';
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-dashbordadmin',
  templateUrl: './dashbordadmin.component.html',
  styleUrls: ['./dashbordadmin.component.css']
})
export class DashbordadminComponent  implements OnInit {
  constructor(public  _shared:AuthService) {
  }
  users:any;
  ngOnInit() :void{
    this._shared.getALLetablissement().subscribe(
      res=>{
        console.log(res);
        this.users=res;
      },
      err=>{
        console.log(err);

      }
    )
  }

}
