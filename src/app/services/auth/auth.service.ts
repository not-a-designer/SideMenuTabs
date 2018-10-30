import { Injectable }       from '@angular/core';
//import { Router }           from '@angular/router';
import { AngularFireAuth }  from '@angular/fire/auth';

import { GooglePlus }       from '@ionic-native/google-plus/ngx'

import { Observable, of }   from 'rxjs';
import { switchMap }        from 'rxjs/operators';

import * as firebase        from 'firebase/app';

import { environment }      from '@environments/environment.prod';
import { FirestoreService } from '@app-services/firestore/firestore.service';
import { User }             from '@app-interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, 
              private firestore: FirestoreService,
              private gPlus: GooglePlus,
              //private router: Router
              ) { 

    this._user$ = this.afAuth.authState;

    this._user$.subscribe((user) => {
      if (user) console.log('authenticated');
      else console.log(' not authenticated');
    });
  }

  /** REGISTER **/
  public async register(email: string, password: string): Promise<firebase.auth.UserCredential> {
    try { return (await this.afAuth.auth.createUserWithEmailAndPassword(email, password)) }
    catch(e) { console.log(e) }
  } 

  /** EMAIL LOGIN **/
  public async emailLogin(email: string, password: string): Promise<firebase.auth.UserCredential> {
    try { return (await this.afAuth.auth.signInWithEmailAndPassword(email, password)) }
    catch(e)  { console.log(e)}
  }

  /** GOOGLE NATIVE LOGIN **/
  public async googleNativeLogin(): Promise<firebase.auth.UserCredential> {
      try {
        const gPlusUser = await this.gPlus.login(environment.googlePlusConfig);
        const credential = firebase.auth.GoogleAuthProvider.credential(gPlusUser.idToken);
      
        return await this.afAuth.auth.signInAndRetrieveDataWithCredential(credential);
      }
      catch(e) { console.log(e) }
  }

  /** GOOGLE BROWSER POPUP LOGIN **/
  public async googleBrowserLogin(): Promise<firebase.auth.UserCredential> {
    const provider = new firebase.auth.GoogleAuthProvider();
    return await this.oAuthLogin(provider);
  }

  /** oAUTH LOGIN (FOR MULTIPLE PLATFORMS) **/
  private async oAuthLogin(provider): Promise<firebase.auth.UserCredential> {
    try {
      return this.afAuth.auth.signInWithPopup(provider);
    }
    catch(e) { console.trace('oAuthLoginError ', e) }
  }

  /** SIGNOUT **/
  public signOut() {
    this.afAuth.auth.signOut();
    
  }

  /** GOOGLE NATIVE LOGOUT **/
  public googleSignOut() {
    this.gPlus.logout();
  }

  /** USER-TYPE OBSERVABLE **/
  get user$(): Observable<User> { 
    return this._user$.pipe(
        switchMap((u: firebase.User) => {
          if (u) return this.firestore.getUser(u.uid);
          else return of(null);
        })
    );
  }
}