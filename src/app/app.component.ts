import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../environments/environment';
import { homeRouteAnimation } from './animations';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [homeRouteAnimation]
})


export class AppComponent {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  app = initializeApp(firebaseConfig);

}
