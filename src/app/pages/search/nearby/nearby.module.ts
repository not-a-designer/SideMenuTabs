import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule }         from '@angular/common';
import { FormsModule }          from '@angular/forms';

import { IonicModule }          from '@ionic/angular';

import { NearbyPage }           from './nearby.page';


const routes: Routes = [{ path: '', component: NearbyPage }];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  
  declarations: [NearbyPage]
})
export class NearbyPageModule {}
