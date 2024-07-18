import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  constructor() {
  }
  p2 = false;
  p3 = false;
  p4 = false;

  link1 = {texto:'Únete a Nuestra Comunidad',link:'#' , bg:'primary',tx:'light' , ms:'-90px'};
  link2 = {texto:'Contribuye Ahora',link:'#' , bg:'light' ,tx:'dark',w:'90%'};
  link3 = {texto:'Explora Proyectos',link:'#' , bg:'body-tertiary' ,tx:'light',w:'85%'};



  dWords: string[] = ['evOps','esarrollando'];
  iWords: string[] = ['deas'];
  cWords: string[] = ['reando'];
  sWords: string[] = ['oluciones'];

  handleEndOfWords(p: number) {
    switch (p) {
      case 1:
        this.p2 = true;
        break;
      case 2:
        this.p3 = true;
        break;
      case 3:
        this.p4 = true;
        break;
      default:
        break;
    }
  }
}
