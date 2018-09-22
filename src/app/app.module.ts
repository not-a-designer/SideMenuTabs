/** ANGULAR **/
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }    from '@angular/core';
import { BrowserModule }                       from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy }    from '@angular/router';

/** IONIC **/
import { IonicModule, 
         IonicRouteStrategy }                  from '@ionic/angular';

/** IONIC NATIVE PLUGINS **/
import { SplashScreen }                        from '@ionic-native/splash-screen/ngx';
import { StatusBar }                           from '@ionic-native/status-bar/ngx';

/** ANGULARFIRE - FIRESTORE **/
import { AngularFireModule }                   from '@angular/fire';
import { AngularFirestoreModule }              from '@angular/fire/firestore';

/** ANGULAR GOOGLE MAPS **/
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';


/**APP API CREDENTIALS **/
import { MAP_API_KEY, FIREBASE_CONFIG }        from './app-credentials';
/** ROUTING MODULE **/
import { AppRoutingModule }                    from './app-routing.module';
/** COMPONENTS **/
import { AppComponent }                        from './app.component';
import { LocationComponent }                   from './app-location/app-location.component';
/** SERVICES **/
import { AgmMapService }                       from '@app-services/agm-map.service' //from './services/agm-map.service';
import { FirestoreService }                    from '@app-services/firestore.service';


@NgModule({
  declarations: [ 
    AppComponent, 
    LocationComponent 
  ],

  entryComponents: [ LocationComponent ],

  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFirestoreModule,
    AgmCoreModule.forRoot(MAP_API_KEY)
  ],

  providers: [
    AgmMapService,
    FirestoreService,
    GoogleMapsAPIWrapper,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],

  bootstrap: [ AppComponent ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
