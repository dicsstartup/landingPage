import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private intervalId: any = null;
  private intervalDuration: number = 0;
  private callback: (() => void) = () => void {};

  constructor() { }

  start(callback: () => void, intervalDuration: number) {
    this.callback = callback;
    this.intervalDuration = intervalDuration;
    this.stop(); // Asegurarse de que no hay un intervalo corriendo
    this.intervalId = setInterval(this.callback, this.intervalDuration);
  }

  stop() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  reset() {
    this.start(this.callback, this.intervalDuration);
  }
}
