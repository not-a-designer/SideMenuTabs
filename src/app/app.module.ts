/**        ANGULAR          **/
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }    from '@angular/core';
import { FormsModule }                         from '@angular/forms';
import { BrowserModule }                       from '@angular/platform-browser';
import { BrowserAnimationsModule }             from '@angular/platform-browser/animations';
import { RouterModule, RouteReuseStrategy }    from '@angular/router';

/**         IONIC           **/
import { IonicModule, 
         IonicRouteStrategy }                  from '@ionic/angular';

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
/**          GUARDS         **/
import { AuthGuard }                           from '@app-services/auth/auth.guard';
/**        COMPONENTS       **/
import { AppComponent }                        from './app.component';
import { ComponentsModule }                    from '@app-components/components.module';
import { AuthPageModule }                      from './pages/auth/auth.page.module'
/**         SERVICES        **/
import { AuthService }                         from '@app-services/auth/auth.service';
import { FirestoreService }                    from '@app-services/firestore.service';
import { GoogleMapsService }                   from '@app-services/google-maps.service';


@NgModule({
  declarations: [ AppComponent ],

  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    FormsModule,
    IonicModule.forRoot(), 
    RouterModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AgmCoreModule.forRoot(environment.agmConfig),
    ComponentsModule,
    AuthPageModule
  ],

  providers: [
    AuthGuard,
    AuthService,
    FirestoreService,
    Geolocation,
    GoogleMapsAPIWrapper,
    GoogleMapsService,
    GooglePlus,
    StatusBar,
    SplashScreen,
    WebView,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],

  bootstrap: [ AppComponent ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
