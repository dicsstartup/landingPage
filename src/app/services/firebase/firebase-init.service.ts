import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseInitService {
  
    app : FirebaseApp ;
  
  constructor() {
     this.app = initializeApp(env.firebaseConfig);
  }

}
