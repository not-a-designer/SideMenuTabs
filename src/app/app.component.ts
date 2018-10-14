import { ChangeDetectorRef, Component}         from '@angular/core';
import { Router }           from '@angular/router'

import { Platform }         from '@ionic/angular';
import { SplashScreen }     from '@ionic-native/splash-screen/ngx';
import { StatusBar }        from '@ionic-native/status-bar/ngx';

import { Observable }       from 'rxjs';

import { FirestoreService } from '@app-services/firestore.service';
import { Coffeeshop }       from './interfaces/coffeeshop';
import { AuthService }      from '@app-services/auth/auth.service';
import { User }             from '@app-interfaces/user';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public displayedLocation: Coffeeshop;
  public selectedLocation$: Observable<any>;
  user: User;

  constructor(private firestore: FirestoreService,
              private auth: AuthService,
              private cdr: ChangeDetectorRef,
              private platform: Platform,
              private splashScreen: SplashScreen,
              private statusBar: StatusBar,
              public router: Router) {
                
    this.initializeApp();
  }

  private async initializeApp(): Promise<void> {
    await this.platform.ready(); //.then(() => {
    this.statusBar.styleDefault();
    this.splashScreen.hide();

      //this.loadSelected();

    this.auth.user$.subscribe((u) => {
      if (u) {
        this.user = u;
        console.log('app-user: ', this.user.uid);
        this.cdr.detectChanges();
      }
      else this.user = null;
      this.cdr.detectChanges();
    });
    //});*/
  }

  private loadSelected() {    
    /*this.firestore.selectedLocation.subscribe((location) => {
      this.displayedLocation = location;

      for (let el in this.displayedLocation) {
        if (el === 'latLng') console.dir(`${el}: { lat: ${this.displayedLocation[el].lat}, lng: ${this.displayedLocation[el].lng} }`);
        else console.dir(`${el}: ${this.displayedLocation[el]}`);
      }
    });*/
  }

  public isNotAuthPage() {
    if (this.router.url == '/auth') {
      console.log('authpage');
      return false;
    }
    return true;
  }


}
