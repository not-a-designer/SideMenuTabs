/**        ANGULAR          **/
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }    from '@angular/core';
import { FormsModule }                         from '@angular/forms';
import { BrowserModule }                       from '@angular/platform-browser';
import { BrowserAnimationsModule }             from '@angular/platform-browser/animations';
import { RouterModule, RouteReuseStrategy }    from '@angular/router';

/**         IONIC           **/
import { IonicModule, 
         IonicRouteStrategy }                  from '@ionic/angular';
/**     IONIC STORAGE       **/
import { IonicStorageModule }                  from '@ionic/storage';
/**  IONIC NATIVE PLUGINS   **/
import { Geolocation }                         from '@ionic-native/geolocation/ngx';
import { GooglePlus }                          from '@ionic-native/google-plus/ngx';
import { SplashScreen }                        from '@ionic-native/splash-screen/ngx';
import { StatusBar }                           from '@ionic-native/status-bar/ngx';
import { WebView }                             from '@ionic-native/ionic-webview/ngx'

/** ANGULARFIRE - FIRESTORE **/
import { AngularFireModule }                   from '@angular/fire';
import { AngularFireAuthModule }               from '@angular/fire/auth';
import { AngularFirestoreModule }              from '@angular/fire/firestore';

/**   ANGULAR GOOGLE MAPS   **/
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
 
/**   APP API CREDENTIALS   **/
import { environment }                         from '@environments/environment.prod';
/**      ROUTING MODULE     **/
import { AppRoutingModule }                    from './app-routing.module';
import { LocationModalPageModule }             from '@app-pages/location-modal/location-modal.page.module';
/**        COMPONENTS       **/
import { AppComponent }                        from './app.component';
import { ComponentsModule }                    from '@app-components/components.module';
import { PipesModule }                         from '@app-pipes/pipes.module';
import { AuthPageModule }                      from '@app-pages/auth/auth.page.module';
import { ServicesModule }                      from '@app-services/services.module';
/**         SERVICES        **/
/*import { AuthService }                         from '@app-services/auth/auth.service';
import { FirestoreService }                    from '@app-services/firestore/firestore.service';
import { GoogleMapsService }                   from '@app-services/google-maps/google-maps.service';
import { IonicStorageService }                 from '@app-services/ionic-storage/ionic-storage.service';
*/

@NgModule({
  declarations: [ AppComponent ],

  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    FormsModule,
    IonicModule.forRoot(), 
    IonicStorageModule.forRoot(),
    RouterModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AgmCoreModule.forRoot(environment.agmConfig),
    ComponentsModule,
    PipesModule,
    AuthPageModule,
    LocationModalPageModule,
    ServicesModule
  ],

  entryComponents: [ ],

  providers: [
    //AuthService,
    //FirestoreService,
    Geolocation,
    GoogleMapsAPIWrapper,
    //GoogleMapsService,
    GooglePlus,
    //IonicStorageService,
    StatusBar,
    SplashScreen,
    WebView,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],

  bootstrap: [ AppComponent ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}