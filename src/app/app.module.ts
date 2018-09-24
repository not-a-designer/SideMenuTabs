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
import { environment }                         from '../environments/environment.prod';
/** ROUTING MODULE **/
import { AppRoutingModule }                    from './app-routing.module';
/** COMPONENTS **/
import { AppComponent }                        from './app.component';
import { LocationComponent }                   from './app-location/app-location.component';
/** SERVICES **/
import { FirestoreService }                    from '@app-services/firestore.service';
import { GoogleMapsService }                   from '@app-services/google-maps.service';


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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AgmCoreModule.forRoot(environment.agmConfig)
  ],

  providers: [
    FirestoreService,
    GoogleMapsAPIWrapper,
    GoogleMapsService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],

  bootstrap: [ AppComponent ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
