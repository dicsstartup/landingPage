import { Component, ElementRef, ViewChild } from '@angular/core';
import { Proyect } from 'src/app/models/ProjectList';
import { ProyectoService } from 'src/app/services/realtimeDB/proyecto/proyecto.service';
import { TimerService } from 'src/app/services/timer/timer.service';

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
      name: 'Contactanos',
      link: 'Descripción del Proyecto 3'
    }
  ];
  visibleItems: [] = [];

  @ViewChild('scrollable') scrollable!: ElementRef;

  currentView = 0;
  currentWidth = 0;


  constructor(private timerService: TimerService,
    private proyectService: ProyectoService) {

  }

  ngOnInit() {
    this.proyectService.getAllProyects().then((data) => {
      this.proyectos = [...data, ...this.proyectos];
    }).catch((err) => {
      console.error(" " + err);
    });
    this.startTimer();
  }

  ngOnDestroy() {
    this.timerService.stop();
  }

  startTimer() {
    const myCallback = () => {
      this.next();
    };
    this.timerService.start(myCallback, 4000);
  }

  resetTimer() {
    this.timerService.reset();
  }


  next(): void {
    if (this.isExecuting) {
      return;
    }
    this.currentView = (this.currentView + 1) % this.proyectos.length;
    this.currentWidth = this.currentView > 0 ? this.scrollable.nativeElement.querySelector('.fixed-element' + this.currentView).scrollWidth * (this.currentView) : 0;
    this.smoothScroll(this.currentWidth, 500);
    this.resetTimer();
  }

  prev() {
    this.currentView = (this.currentView - 1 + this.proyectos.length) % this.proyectos.length;
    this.adjustElementPosition();
    this.resetTimer();
    this.isExecuting = true;

  }

  adjustElementPosition() {
    const targetElement = this.scrollable.nativeElement.querySelector('.fixed-element' + this.currentView);
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  }

  smoothScroll(targetScrollLeft: number, duration: number) {
    const startScrollLeft = this.scrollable.nativeElement.scrollLeft;
    const change = targetScrollLeft - startScrollLeft;
    let currentTime = 0;
    const increment = 20;

    const animateScroll = () => {
      currentTime += increment;
      const val = this.easeInOutQuad(currentTime, startScrollLeft, change, duration);
      this.scrollable.nativeElement.scrollLeft = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  }

  easeInOutQuad(t: number, b: number, c: number, d: number): number {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }
}