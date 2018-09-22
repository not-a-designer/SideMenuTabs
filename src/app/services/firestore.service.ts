import { Injectable }                  from '@angular/core';

import { AngularFirestore }            from '@angular/fire/firestore';

import { Observable, BehaviorSubject } from 'rxjs';

import { Coffeeshop }                  from '../interfaces/coffeeshop'


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  public selectedLocation: BehaviorSubject<Coffeeshop> = new BehaviorSubject<Coffeeshop>(null);

  constructor(private afs: AngularFirestore) { }

  loadColectivo(filter?: any): Observable<Coffeeshop[]> {
    return this.afs.collection<Coffeeshop>('colectivo').valueChanges();
  }

  updateLocation(shop: Coffeeshop) {
    this.selectedLocation.next(shop);
  }
}
