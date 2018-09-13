import { RouterModule }                     from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { FormsModule }                      from '@angular/forms';

import { IonicModule }                      from '@ionic/angular';

import { AgmCoreModule }                    from '@agm/core';

import { MapPage }                          from './map.page';
import { AgmComponent }                     from './agm/agm.component';
import { NativeMapComponent } from './native-map/native-map.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{
        path: '',
        component: MapPage
    }]),
    AgmCoreModule.forRoot()
  ],

  declarations: [ 
    MapPage, 
    AgmComponent, 
    NativeMapComponent ],

  entryComponents: [ 
    AgmComponent,
    NativeMapComponent
  ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MapPageModule {}
