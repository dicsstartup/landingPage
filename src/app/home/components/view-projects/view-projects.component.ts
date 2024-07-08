import { Component, ElementRef, ViewChild } from '@angular/core';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-view-projects',
  templateUrl: './view-projects.component.html',
  styleUrls: ['./view-projects.component.scss']
})
export class ViewProjectsComponent {

  proyectos = [
    {
      imagen: '../assets/imgs/Spot_imagen.png',
      titulo: 'SPOT',
      link: 'Descripción del Proyecto 1'
    },
    {
      imagen: '../assets/imgs/DevHelper.png',
      titulo: 'DevHelper',
      link: ''
    },
    {
      imagen: '../assets/imgs/DevFormFX.png',
      titulo: 'DevFormFx',
      link: 'Descripción del Proyecto 3'
    },
    {
      imagen: '../assets/imgs/unete.png',
      titulo: 'Contactanos',
      link: 'Descripción del Proyecto 3'
    }
  ];
  visibleItems:[] = [];

  @ViewChild('scrollable') scrollable!: ElementRef;

  currentView = 0;
  currentWidth=0;


  constructor(private timerService: TimerService) {}

  ngOnInit() {
    this.startTimer();
    
  }

  ngOnDestroy() {
    this.timerService.stop();
  }

  startTimer() {
    const myCallback = () => {
      this.currentView = (this.currentView + 1) % this.proyectos.length;
      this.currentWidth = this.currentView > 0 ? this.scrollable.nativeElement.querySelector('.fixed-element' + this.currentView).scrollWidth*(this.currentView):0;
      this.smoothScroll(this.currentWidth,1000);
    };
    this.timerService.start(myCallback, 4000);
  }

  resetTimer() {
    this.timerService.reset();
  }


  next() {
    this.currentView = (this.currentView + 1) % this.proyectos.length;
    this.currentWidth = this.currentView > 0 ? this.scrollable.nativeElement.querySelector('.fixed-element' + this.currentView).scrollWidth*(this.currentView):0;
    this.smoothScroll(this.currentWidth,1000);
    this.resetTimer();
  }

  prev() {
    this.currentView = (this.currentView - 1 + this.proyectos.length) % this.proyectos.length;
    this.adjustElementPosition();
    this.resetTimer();
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
