import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.scss']
})
export class TecnologiasComponent {
  @Input() list : {name:string,src:string}[]=[];

  constructor() { }

}
