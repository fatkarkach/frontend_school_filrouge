import { Component } from '@angular/core';

@Component({
  selector: 'app-partenaires',
  templateUrl: './partenaires.component.html',
  styleUrls: ['./partenaires.component.css']
})
export class PartenairesComponent {
  images = [
    { img: "../assets/images/school1.png" },
    { img: "../assets/images/school1.png" },
    { img: "../assets/images/school1.png" },
    { img: "../assets/images/school1.png" },
    { img: "../assets/images/school1.png" },
    { img: "../assets/images/school1.png" },
    { img: "../assets/images/school1.png" },
    { img: "../assets/images/school1.png" },
    { img: "../assets/images/school1.png" },
    { img: "../assets/images/school1.png" },
    { img: "../assets/images/school1.png" },
    { img: "../assets/images/school1.png" },
    { img: "../assets/images/school1.png" },
    { img: "../assets/images/school1.png" },
    { img: "../assets/images/school1.png" },
  ];
  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 4,
    "dots": true,
    "infinite": true
  };

}
