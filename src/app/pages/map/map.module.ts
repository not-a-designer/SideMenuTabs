import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule }             from '@angular/router';
import { CommonModule }                     from '@angular/common';
import { FormsModule }                      from '@angular/forms';

import { AngularFirestoreModule }           from '@angular/fire/firestore';

import { IonicModule }                      from '@ionic/angular';

import { AgmCoreModule }                    from '@agm/core';

import { ComponentsModule }                 from '../../components/components.module';
import { environment }                      from '@environments/environment.prod';
import { MapPage }                          from './map.page';
import { AgmComponent }                     from './agm/agm.component';

const routes: Routes = [
  { path: '', component: MapPage }
]


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    AngularFirestoreModule,
    AgmCoreModule.forRoot(environment.agmConfig),
    ComponentsModule
  ],

  declarations: [ 
    MapPage, 
    AgmComponent
  ],

  entryComponents: [ AgmComponent ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MapPageModule {}
