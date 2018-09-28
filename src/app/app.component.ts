
import { Component }        from '@angular/core';
import { Router }           from '@angular/router'

import { Platform }         from '@ionic/angular';
import { SplashScreen }     from '@ionic-native/splash-screen/ngx';
import { StatusBar }        from '@ionic-native/status-bar/ngx';

import { Observable }       from 'rxjs';

import { FirestoreService } from '@app-services/firestore.service';
import { Coffeeshop }       from './interfaces/coffeeshop';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public displayedLocation: Coffeeshop;
  public selectedLocation$: Observable<any>;

  constructor(private firestore: FirestoreService,
              private platform: Platform,
              private splashScreen: SplashScreen,
              private statusBar: StatusBar,
              public router: Router) {
                
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      //this.loadSelected();
    });
  }

  loadSelected() {    
    /*this.firestore.selectedLocation.subscribe((location) => {
      this.displayedLocation = location;

      for (let el in this.displayedLocation) {
        if (el === 'latLng') console.dir(`${el}: { lat: ${this.displayedLocation[el].lat}, lng: ${this.displayedLocation[el].lng} }`);
        else console.dir(`${el}: ${this.displayedLocation[el]}`);
      }
    });*/
  }


}
