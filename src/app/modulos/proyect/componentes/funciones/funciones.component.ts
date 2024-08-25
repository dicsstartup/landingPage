import { Component, Input } from '@angular/core';
import { Funcion } from 'src/app/models/proyect-model';

@Component({ 
  selector: 'proyect-funciones',
  templateUrl: './funciones.component.html',
  styleUrls: ['./funciones.component.scss']
})
export class FuncionesComponent {
  @Input() funciones:Funcion[]=[];

}
