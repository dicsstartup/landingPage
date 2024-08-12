import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { _tecnologias } from 'src/app/models/constantes/tecnologias';
import { ProyectoSelectedService } from 'src/app/services/proyectoSelected/proyecto.service';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.scss']
})
export class TecnologiasComponent implements OnInit {

  @Input() all?: boolean = false;

  list!: { key: string; src: string;}[];
  constructor(private service: ProyectoSelectedService) { }
  private subscriptions: Subscription = new Subscription();


  ngOnInit(): void {
    if (this.all) {
      this.duplicarLista(this.Lista());
    } else {
      this.subscriptions.add(
        this.service.getTecnologias().subscribe(tecnologias => {
          let l: { key: string, src: string }[] =  tecnologias
          .filter(nombre => _tecnologias.hasOwnProperty(nombre)) // Filtrar los nombres que existen como claves en `objetos`
          .map(nombre => ({
            key: nombre,
            src: _tecnologias[nombre].src,
          }));
          if (l.length > 0) {
            const targetLength = 14;
            while (l.length < targetLength) {
              l = l.concat(l);
            }
            l = l.slice(0, targetLength);
          }
          this.list = l;
        })
      );
    }
  }
  

Lista(): { key: string; src: string;}[] {
    if (_tecnologias) {
        const result: { key: string, src: string }[] = [];
        Object.keys(_tecnologias).forEach(key => {
            const { src } = _tecnologias[key];
            result.push({ key, src });
        });
       return result;
    } else {
        return [];
    }
}

duplicarLista(list: { key: string; src: string;}[] ): void {
  this.list = list ? list.concat(list) : [];
}

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
