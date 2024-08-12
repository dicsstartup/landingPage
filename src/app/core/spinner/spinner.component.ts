import { Component } from '@angular/core';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';

@Component({
  selector: 'app-spinner',
  template: '<div *ngIf="this.isLoanding$ | async" class="overlay"><div class="lds-hourglass"></div></div>',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {

  constructor(private spinnerService: SpinnerService){

  }

  isLoanding$= this.spinnerService.isLoanding;

}
