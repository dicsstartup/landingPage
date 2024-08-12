import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Enlace } from 'src/app/models/proyect-model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoSelectedService {

  private tecnologiasSubject = new BehaviorSubject<string[]>([]);
  private botoneraSubject = new BehaviorSubject<Enlace[]>([]);

  constructor() {}

  setTecnologias(tecnologias: string[]) {
    this.tecnologiasSubject.next(tecnologias);
  }

  getTecnologias(): Observable<string[]> {
    return this.tecnologiasSubject.asObservable();
  }

  setBotonera(botonera: Enlace[]) {
    this.botoneraSubject.next(botonera);
  }

  getBotonera(): Observable<Enlace[]> {
    return this.botoneraSubject.asObservable();
  }

}
