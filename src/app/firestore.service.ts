import { Injectable }       from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

import { Observable }       from 'rxjs';

import { Coffeeshop }       from './interfaces/coffeeshop'


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private afs: AngularFirestore) { }

  loadColectivo(filter?: any): Observable<Coffeeshop[]> {
    return this.afs.collection<Coffeeshop>('colectivo').valueChanges();
  }
}
