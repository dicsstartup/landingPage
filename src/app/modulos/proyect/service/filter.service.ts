import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';
import { _plataformas, _tecnologias } from 'src/app/models/constantes/tecnologias';
import { Filter } from '../models/filter';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private plataformasSubject = new BehaviorSubject<Filter[]>(this.mapperPlatforms());
  private tecnologiasSubject = new BehaviorSubject<Filter[]>(this.mapperTecnologias());

  getPlataformas(): Observable<Filter[]> {
    return this.plataformasSubject.asObservable();
  }

  updatePlataforma(name: string, checked: boolean) {
    const currentPlataformas = this.plataformasSubject.value.map(plataforma =>
      plataforma.label === name ? { ...plataforma, checked } : plataforma
    );
    this.plataformasSubject.next(currentPlataformas);
  }

  getPlataformasSeleccionadas(): Observable<Filter[]> {
    return this.plataformasSubject.asObservable().pipe(
      map(plataformas =>
        plataformas.filter(plataforma => plataforma.checked)  // Filtra solo las seleccionadas
      )
    );
  }


  getTecnologias(): Observable<Filter[]> {
    return this.tecnologiasSubject.asObservable();
  }

  updateTecnlogia(name: string, checked: boolean) {
    const currentTecnologias = this.tecnologiasSubject.value.map(tecnologia =>
      tecnologia.label === name ? { ...tecnologia, checked } : tecnologia
    );
    this.tecnologiasSubject.next(currentTecnologias);
  }

  getTecnologiasSeleccionadas(): Observable<Filter[]> {
    return this.tecnologiasSubject.asObservable().pipe(
      map(tecnologia =>
        tecnologia.filter(tecnologia => tecnologia.checked)  // Filtra solo las seleccionadas
      )
    );
  }

  mapperPlatforms(): Filter[] {
    return Object.keys(_plataformas).map(key => ({
      label: key,
      checked: false,
      group: 'plataforma'
    }));
  }

  mapperTecnologias(): Filter[] {
    return Object.keys(_tecnologias).map(key => ({
      label: key,
      checked: false,
      group: 'tecnologia'
    }));
  }
}