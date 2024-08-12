import { Component, Input } from '@angular/core';

@Component({
  selector: 'proyect-objetivos',
  templateUrl: './objetivos.component.html',
  styleUrls: ['./objetivos.component.scss']
})
export class ObjetivosComponent {

  @Input() objetivos:string[]=[];



}
