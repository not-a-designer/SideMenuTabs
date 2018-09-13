import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { RouterModule, 
         RouteReuseStrategy } from '@angular/router';

import { IonicModule, 
         IonicRouteStrategy } from '@ionic/angular';

import { SplashScreen }       from '@ionic-native/splash-screen/ngx';
import { StatusBar }          from '@ionic-native/status-bar/ngx';

import { AgmCoreModule }      from '@agm/core';

import { MAP_API_KEY }        from './app-credentials';
import { AppRoutingModule }   from './app-routing.module';
import { AppComponent }       from './app.component';


@NgModule({
  declarations: [ AppComponent ],

  entryComponents: [],

  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AgmCoreModule.forRoot(MAP_API_KEY)
  ],

  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],

  bootstrap: [ AppComponent ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
