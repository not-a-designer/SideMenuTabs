import { GoogleMapsService }                from './services/google-maps/google-maps.service';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router }                           from '@angular/router';

import { Platform, Menu }                   from '@ionic/angular';
import { SplashScreen }                     from '@ionic-native/splash-screen/ngx';
import { StatusBar }                        from '@ionic-native/status-bar/ngx';
//import { Observable }       from 'rxjs';

//import { FirestoreService } from '@app-services/firestore/firestore.service';
//import { Coffeeshop }       from './interfaces/coffeeshop';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  @ViewChild('mainMenu') mainMenu: Menu;

  //public displayedLocation: Coffeeshop;
  //public selectedLocation$: Observable<any>;

  constructor(//private firestore: FirestoreService,
              private googleMaps: GoogleMapsService,
              public router: Router,
              private platform: Platform,
              private splashScreen: SplashScreen,
              private statusBar: StatusBar) {
                
    this.initializeApp();
  }

  private async initializeApp(): Promise<void> {
    try {
      await this.platform.ready();
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      //this.loadSelected();
    }
    catch(e) { console.log('initializeApp() error: ', e) }
  }

  public showModal() {
    this.googleMaps.setInfoWindow(null, null, null);
  }

  checkRouterUrl() {
    if (this.router.url.includes('search')) return false;
    else if (this.router.url.includes('settings')) return false
    else if (this.router.url.includes('auth')) return false;
    else return true;
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
}
