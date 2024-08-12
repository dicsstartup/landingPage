import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Proyect } from 'src/app/models/proyect-model';
import { ProyectoService } from 'src/app/services/realtimeDB/proyecto/proyecto.service';

@Component({
  selector: 'app-view-projects',
  templateUrl: './view-projects.component.html',
  styleUrls: ['./view-projects.component.scss']
})
export class ViewProjectsComponent {

  isExecuting: boolean = false;

  proyectos: Proyect[] = [
    {
      img: '../assets/imgs/unete.png',
      name: 'more',
      description: 'more',
      link: 'proyects',
      estado:'',
      tecnologias:[],
      plataformas: []
    }
  ];
  visibleItems: [] = [];

  @ViewChild('scrollable') scrollable!: ElementRef;

  currentView = 0;
  currentWidth = 0;
  targetElement!:HTMLElement | null  ;

  constructor(
    private proyectService: ProyectoService,
    private router: Router,
     private viewportScroller: ViewportScroller) {

  }

  ngOnInit() {
    this.proyectService.getAllProyects().then((data) => {
      this.proyectos = [...data, ...this.proyectos];
      this.targetElement = this.scrollable.nativeElement.querySelector('.fixed-element' + this.currentView);
    }).catch((err) => {
      console.error(" " + err);
    });
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

  next(): void {
    this.currentView = (this.currentView + 1) % this.proyectos.length;
    this.currentWidth = this.currentView > 0 ? this.scrollable.nativeElement.querySelector('.fixed-element' + this.currentView).scrollWidth * (this.currentView) : 0;
    this.adjustElementPosition();
  }

  prev() {
    this.currentView = (this.currentView - 1 + this.proyectos.length) % this.proyectos.length;
    this.adjustElementPosition();
  }

  adjustElementPosition() {
    if(this.targetElement!=null){
      this.targetElement.classList.remove('active');

    }

    this.targetElement = this.scrollable.nativeElement.querySelector('.fixed-element' + this.currentView);
    if(this.targetElement!=null){
      this.targetElement.classList.add('active');
      this.targetElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
   }

}