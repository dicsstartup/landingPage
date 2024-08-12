import { Injectable } from '@angular/core';
import { get, getDatabase, ref } from "firebase/database";
import { FirebaseApp } from 'firebase/app';
import { FirebaseInitService } from '../../firebase/firebase-init.service';
import { EmptyProyect, EmptyProyectInfo, Proyect, ProyectInfo } from 'src/app/models/proyect-model';
import { StoregeService } from '../../storege/storege.service';

const URL = '/proyectos'
const URL_INFO = '/proyecto-info/'

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  app: FirebaseApp;
  db;
  constructor(private firebaseapp: FirebaseInitService,
    private storage: StoregeService) {
    this.app = this.firebaseapp.app;
    this.db = getDatabase(this.app);
  }

  getAllProyects(): Promise<Proyect[]> {
    let dbRef = ref(this.db, URL);
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
                description:data.descripcion,
                img: img,
                link: key,
                estado:data.estado,
                tecnologias: data.tecnologias,
                plataformas: data.plataformas
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

  async getInfoProyect(id: string): Promise<ProyectInfo> {
    const dbRef = ref(this.db, URL_INFO + id);

    try {
      const snapshot = await get(dbRef);

      if (snapshot.exists()) {
        let data = snapshot.val();
        let key = snapshot.key;

        // Obtener las imágenes de forma asíncrona
        let imgs = await this.storage.getCarpetFiles('/' + URL_INFO + '/' + key + '/imgs');
        // Crear el objeto ProyectInfo
        let proyect: ProyectInfo = {
          sub_title: data.sub_title,
          description: data.description,
          icon: data.icon,
          imgs: imgs,
          botonera: data.botonera,
          objetivos: data.objetivos,
          funciones: data.funciones
        };
        return proyect;
      } else {
        return EmptyProyectInfo();
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getProyect(id: string): Promise<Proyect> {
    const dbRef = ref(this.db, URL + '/' + id);
    try {
      const snapshot = await get(dbRef);

      if (snapshot.exists()) {
        let data = snapshot.val();
        let key = snapshot.key;

        // Obtener las imágenes de forma asíncrona
        let img = await this.storage.getUrl('/' + URL + '/' + key + '/' + data.imgList);
        // Crear el objeto ProyectInfo
        let proyect: Proyect = {
          name: data.name,
          img: img,
          link: '',
          estado:data.estado,
          description:data.descripcion,
          tecnologias: data.tecnologias,
          plataformas: data.plataformas

        };
        return proyect;
      } else {
        return EmptyProyect();
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

