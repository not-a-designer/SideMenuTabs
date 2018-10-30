import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CoffeeSearchPage } from './coffee-search.page';

const routes: Routes = [
  {
    path: '',
    component: CoffeeSearchPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CoffeeSearchPage]
})
export class CoffeeSearchPageModule {}
