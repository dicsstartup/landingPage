import { Component } from '@angular/core';
import { ProyectoService } from 'src/app/services/realtimeDB/proyecto/proyecto.service';

@Component({
  selector: 'app-page-project',
  templateUrl: './page-project.component.html',
  styleUrls: ['./page-project.component.scss']
})
export class PageProjectComponent {

  constructor(service: ProyectoService) {
    service.getAllProyects();
  }
}
