import { Component } from '@angular/core';
import { homeRouteAnimation } from './animations';
import { FirebaseInitService } from './services/firebase/firebase-init.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [homeRouteAnimation]
})


export class AppComponent {

  constructor( fnit:FirebaseInitService){
  }
  
 

}
