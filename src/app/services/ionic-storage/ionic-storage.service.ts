import { Injectable } from '@angular/core';

import { Storage }    from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class IonicStorageService {

  constructor(private storage: Storage) { }

  async setStorage(key: string, value: any): Promise<void> {
    try { 
      await this.storage.ready();
      await this.storage.set(key, value);
    }
    catch(e) { console.log('storage set error: ', e) }
  }

  async getStorage(key: string): Promise<any> {
    try { 
      await this.storage.ready();
      return await this.storage.get(key);
    }
    catch(e) { console.log('storage get error: ', e) }
  }

  async removeStorage(key: string): Promise<void> {
    try {
      await this.storage.ready();
      await this.storage.remove(key);
    }
    catch(e) { console.log('storage remove error: ', e) }
  }

  async clearStorage() {
    try {
      await this.storage.ready();
      await this.storage.clear();
    }
    catch(e) { console.log('storage clear error: ', e) }
  }
}
