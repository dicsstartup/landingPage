import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../environments/environment';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  app = initializeApp(firebaseConfig);

}
