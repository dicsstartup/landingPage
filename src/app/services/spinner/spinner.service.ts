import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  isLoanding= new Subject<boolean>();
  constructor() { }

  show(){
    this.isLoanding.next(true);
  }

  hide(){
    this.isLoanding.next(false);

  }
}
