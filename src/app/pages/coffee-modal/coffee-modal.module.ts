import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule }         from '@angular/common';
import { FormsModule }          from '@angular/forms';

import { IonicModule }          from '@ionic/angular';

import { CoffeeModalPage }      from './coffee-modal.page';


const routes: Routes = [{ path: '', component: CoffeeModalPage }];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],

  declarations: [ CoffeeModalPage ]
})
export class CoffeeModalPageModule {}
