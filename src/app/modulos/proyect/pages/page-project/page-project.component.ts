import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { EmptyProyect, EmptyProyectInfo, Proyect, ProyectInfo } from 'src/app/models/proyect-model';
import { ProyectoService } from 'src/app/services/realtimeDB/proyecto/proyecto.service';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';
import { ProyectoSelectedService } from 'src/app/services/proyectoSelected/proyecto.service';

@Component({
  selector: 'app-page-project',
  templateUrl: './page-project.component.html',
  styleUrls: ['./page-project.component.scss']
})
export class PageProjectComponent implements OnInit {
  proyectoInfo: ProyectInfo = EmptyProyectInfo();
  proyecto: Proyect = EmptyProyect();
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', { static: true }) carousel!: NgbCarousel;

  constructor(private service: ProyectoService, private route: ActivatedRoute, private spinnerSvc: SpinnerService, public proyectoService: ProyectoSelectedService) {

  }

  async ngOnInit() {
    this.spinnerSvc.show();
    try {
      const id = this.route.snapshot.paramMap.get('id') || '';
      this.proyecto = await this.service.getProyect(id);
      this.proyectoInfo = await this.service.getInfoProyect(id);
      this.proyectoService.setTecnologias(this.proyecto.tecnologias?this.proyecto.tecnologias:[]);
      this.proyectoService.setBotonera(this.proyectoInfo.botonera?this.proyectoInfo.botonera:[]);
    } catch (err) {
      this.proyectoInfo = EmptyProyectInfo();
      console.error('Error al obtener información del proyecto:', err);
    } finally {
      this.spinnerSvc.hide();
    }
  }

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (
      this.unpauseOnArrow &&
      slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    ) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

}
