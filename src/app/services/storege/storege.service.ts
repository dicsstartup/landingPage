import { Injectable } from '@angular/core';
import { FirebaseApp } from 'firebase/app';
import { FirebaseStorage, getDownloadURL, getStorage, listAll, ref, StorageReference } from "firebase/storage";
import { FirebaseInitService } from '../firebase/firebase-init.service';


@Injectable({
  providedIn: 'root'
})
export class StoregeService {
  app: FirebaseApp;
  storage: FirebaseStorage;

  constructor(fapp: FirebaseInitService) {
    this.app = fapp.app;
    this.storage = getStorage(this.app, 'gs://landingpage-d3bb7.appspot.com');
  }

  getUrl(path: string): Promise<string> {
    let pathRef: StorageReference = ref(this.storage, path);
    return getDownloadURL(pathRef);
  }


  async getCarpetFiles(path: string): Promise<string[]> {
    try {
      const storage = getStorage();
      const pathRef = ref(storage, path);
      const results = await listAll(pathRef);
      const filePromises = results.items.map((itemRef) => {
        return getDownloadURL(itemRef).then((url) => {return url;});
      });      
      const fileData = await Promise.all(filePromises);
      return fileData;
    } catch (error) {
      console.error('Error getting carpet files:', error);
      return []; 
    }
  }
}
