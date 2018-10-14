import { Injectable }                  from '@angular/core';
import { AngularFirestore }            from '@angular/fire/firestore';

import { Observable/*, BehaviorSubject*/ } from 'rxjs';

import * as firebase                   from 'firebase/app';

//import { Coffeeshop }                  from '@app-interfaces/coffeeshop';
import { User }                        from '@app-interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  //public selectedLocation: BehaviorSubject<Coffeeshop> = new BehaviorSubject<Coffeeshop>(null);
  public currentUser: User;
  constructor(private afs: AngularFirestore) { }

  /*public loadColectivo(filter?: any): Observable<Coffeeshop[]> {
    return this.afs.collection<Coffeeshop>('colectivo').valueChanges();
  }*/

  /*public updateLocation(shop: Coffeeshop): void {
    this.selectedLocation.next(shop);
  }*/

  public updateUser(user: firebase.User) {
    const coffeeUser: User = {
      email: user.email,
      isAdmin: false,
      uid: user.uid
    };
    this.afs.doc<User>(`users/${user.uid}`).update(coffeeUser);
  }

  public getUser(uid: string): Observable<User> {
    return this.afs.doc<User>(`users/${uid}`).valueChanges();
  }
}
