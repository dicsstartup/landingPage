import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { _plataformas, _tecnologias } from 'src/app/models/constantes/tecnologias';
import { FilterDialogComponent } from '../../componentes/filter-dialog/filter-dialog.component';
import { FilterService } from '../../service/filter.service';
import { Filter } from '../../models/filter';
import { ProyectoService } from 'src/app/services/realtimeDB/proyecto/proyecto.service';
import { Proyect } from 'src/app/models/proyect-model';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-proyects',
  templateUrl: './all-proyects.component.html',
  styleUrls: ['./all-proyects.component.scss']
})
export class AllProyectsComponent {

  filtrosP: Filter[] = [];
  filtrosT: Filter[] = [];
  currentList: Proyect[] = [];
  ListProyects: Proyect[] = [];
  buscardor: string = '';

  constructor(private modalService: NgbModal, private serviceFilter: FilterService,
     private serviceProyecto: ProyectoService ,private router: Router,
     private viewportScroller: ViewportScroller) {
    this.serviceFilter.getPlataformasSeleccionadas().subscribe(data => {
      this.filtrosP = data;
    });
    this.serviceFilter.getTecnologiasSeleccionadas().subscribe(data => {
      this.filtrosT = data;
    });
    this.serviceProyecto.getAllProyects().then((data) => {
      this.currentList = data;
      this.ListProyects = data;
    });
  }
  openFilter() {
    this.modalService.open(FilterDialogComponent, { size: 'xl' });
  }

  onClickP(plataforma: Filter) {
    this.serviceFilter.updatePlataforma(plataforma.label, false);
  }
  onClickT(tecnologia: Filter) {
    this.serviceFilter.updateTecnlogia(tecnologia.label, false);
  }

  get filteredList() {
    return this.currentList.filter((item) => {
      const matchesName = item.name.toLowerCase().includes(this.buscardor.toLowerCase());
      // Filtrado por tecnologías
      const selectedTechs = this.filtrosT
        .map(filter => filter.label);
      const matchesTech = selectedTechs.length === 0 || selectedTechs.every(tech => item.tecnologias.includes(tech));
      // Filtrado por plataformas
      const selectedPlatforms = this.filtrosP
      .map(filter => filter.label);
    const matchesPlatform = selectedPlatforms.length === 0 || selectedPlatforms.some(platform => item.plataformas.includes(platform));
      // Devuelve true solo si ambos criterios coinciden
      return matchesName && matchesTech && matchesPlatform;
    }
    );
  }

  getPlatformIcon(platformName: string): string {
    const platform = _plataformas[platformName];
    return platform ? platform.icon : 'help_outline';
  }

  getTechIcon(techName: string): string {
    const tech = _tecnologias[techName];
    return tech ? tech.icon : 'help_outline'; 
  }
  navegation(id:string){
    if(id.includes('proyects')){
      this.router.navigate([id])
      .then(() => {
        this.viewportScroller.scrollToPosition([0, 0]);
      });
      return;
    }
    this.router.navigate(['proyects/filter', id])
    .then(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }
}
