import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule }                     from '@angular/router';
import { CommonModule }                     from '@angular/common';
import { FormsModule }                      from '@angular/forms';

import { AngularFirestoreModule }           from '@angular/fire/firestore';

import { IonicModule }                      from '@ionic/angular';

import { AgmCoreModule }                    from '@agm/core';

import { MAP_API_KEY }                      from '../../app-credentials';
import { MapPage }                          from './map.page';
import { AgmComponent }                     from './agm/agm.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: MapPage
      }
    ]),
    AngularFirestoreModule,
    AgmCoreModule.forRoot(MAP_API_KEY)
  ],

  declarations: [ 
    MapPage, 
    AgmComponent
  ],

  entryComponents: [ AgmComponent ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MapPageModule {}
