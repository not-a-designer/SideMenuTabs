import { NgModule }              from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { CommonModule }          from '@angular/common';
import { FormsModule }           from '@angular/forms';

import { IonicModule }           from '@ionic/angular';

import { ComponentsModule }      from '@app-components/components.module';
import { PipesModule }           from '@app-pipes/pipes.module';
import { LocationModalPage }     from './location-modal.page';


const routes: Routes = [{ path: '', component: LocationModalPage }];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    PipesModule
  ],
  declarations: [ LocationModalPage ],

  exports: [ LocationModalPage ],

  entryComponents: [ LocationModalPage ]
})
export class LocationModalPageModule {}
