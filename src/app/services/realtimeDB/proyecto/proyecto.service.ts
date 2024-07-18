import { Injectable } from '@angular/core';
import { get, getDatabase, ref } from "firebase/database";
import { FirebaseApp } from 'firebase/app';
import { FirebaseInitService } from '../../firebase/firebase-init.service';
import { Proyect } from 'src/app/models/ProjectList';
import { StoregeService } from '../../storege/storege.service';

const URL = 'proyectos'

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  app: FirebaseApp;
  db;
  constructor(private firebaseapp: FirebaseInitService, private storage: StoregeService) {
    this.app = firebaseapp.app;
    this.db = getDatabase(this.app);
  }

  getAllProyects(): Promise<Proyect[]> {
    let dbRef = ref(this.db, '/' + URL);
    return get(dbRef).then(async (snapshot) => {
      if (snapshot.exists()) {
        let promises: Promise<Proyect>[] = [];
        snapshot.forEach((childSnapshot) => {
          let key = childSnapshot.key;
          let data = childSnapshot.val();
          let promise = this.storage.getUrl('/' + URL + '/' + key + '/' + data.imgList)
            .then((img) => {
              return {
                name: data.name,
                img: img,
                link: key || ''
              };
            });
          promises.push(promise);
        });
        return Promise.all(promises).then((resolvedProyects) => {
          return resolvedProyects;
        });

      } else {
        return [];
      }
    }).catch((error) => {
      console.error(error);
      throw error;
    });
  }
}

