import { NearbyPage } from './nearby/nearby.page';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//import { RouterModule, Routes }             from '@angular/router';
import { CommonModule }                     from '@angular/common';
import { FormsModule }                      from '@angular/forms';

import { IonicModule }                      from '@ionic/angular';

import { ComponentsModule }                 from '@app-components/components.module';
import { SearchPage }                       from '@app-pages/search/search.page';


//const routes: Routes = [{ path: '', component: SearchPage}];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [ SearchPage ],

  exports: [ SearchPage ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SearchPageModule {}
