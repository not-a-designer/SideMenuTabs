import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CoffeeshopSearchPage } from './coffeeshop-search.page';

const routes: Routes = [
  {
    path: '',
    component: CoffeeshopSearchPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CoffeeshopSearchPage]
})
export class CoffeeshopSearchPageModule {}
