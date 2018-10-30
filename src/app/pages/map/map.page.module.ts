import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//import { RouterModule, Routes }             from '@angular/router';
import { CommonModule }                     from '@angular/common';
import { FormsModule }                      from '@angular/forms';
import { AngularFirestoreModule }           from '@angular/fire/firestore';

import { IonicModule }                      from '@ionic/angular';

import { AgmCoreModule }                    from '@agm/core';

import { ComponentsModule }                 from '@app-components/components.module';
import { environment }                      from '@environments/environment.prod';
import { MapPage }                          from '@app-pages/map/map.page';
import { LocationModalPageModule }          from '@app-pages/location-modal/location-modal.page.module'

//const routes: Routes = [{ path: '', component: MapPage }];


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    //RouterModule.forChild(routes),
    AngularFirestoreModule,
    AgmCoreModule.forRoot(environment.agmConfig),
    ComponentsModule,
    LocationModalPageModule
  ],

  declarations: [ MapPage ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MapPageModule {}
