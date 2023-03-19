import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import { BehaviorSubject, filter, from, of, switchMap } from 'rxjs';

const STORAGE_KEY = 'myList';

export interface Item {
  id: number,
  nombre: string,
  cantidad: number
  fechaProduccion: string,
  modified: number
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private storage: Storage) {
    this.init();
   }

   async init() {
    await this.storage.create();
    console.log("DONE");
  }

  addData(item: Item): Promise<Item[]> {
    return this.storage.get(STORAGE_KEY).then((items: Item[]) => {
      if (items) {
        items.push(item);
        return this.storage.set(STORAGE_KEY, items);
      } else {
        return this.storage.set(STORAGE_KEY, [item]);
      }
    });
   }

  getData(): Promise<Item[]> {
    return this.storage.get(STORAGE_KEY);
  }

  updateData(item: Item): Promise<any> {

    return this.storage.get(STORAGE_KEY).then((items: Item[]) => {
      if (!items || items.length === 0) {
       return null;
      } 

      let newItems: Item[] = [];

      for (const i of items) {
        
        if (i.id === item.id) {
          newItems.push(item);
        } else {
          newItems.push(i);
        }

      }
      console.log("STORAGE_KEY: ", STORAGE_KEY);
      console.log("newItems: ", newItems);
      return this.storage.set(STORAGE_KEY, newItems);

    });

  }

  removeData(id: number) {
    return this.storage.get(STORAGE_KEY).then((items: Item[]) => {
      
       if (!items || items.length === 0) {
        return null;
       }

       let toKeep: Item[] = [];

       for (const i of items) {
        if (i.id !== id) {
          toKeep.push(i);
        }
       }

       return this.storage.set(STORAGE_KEY, toKeep); 

    });
  }

  
  /*async init() {
    await this.storage.defineDriver(CordovaSQLiteDriver);
    await this.storage.create();
    console.log("DONE");
    this.storageReady.next(true);
  }

  getData(){
    return this.storageReady.pipe(
      filter(ready => ready),
      switchMap(_ => {
        return from (this.storage.get(STORAGE_KEY)) || of ([]) ;
      })
    )
   
  } 

  async addData(item: any) {
    const storageData = await this.storage.get(STORAGE_KEY) || [];
    storageData.push(item);
    return this.storage.set(STORAGE_KEY, storageData);
  }

  async removeData(index: any) {
    const storageData = await this.storage.get(STORAGE_KEY) || [];
    storageData.splice(index, 1);
    return this.storage.set(STORAGE_KEY, storageData);
  }*/

}

