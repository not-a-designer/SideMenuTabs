import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule }         from '@angular/common';
import { FormsModule }          from '@angular/forms';

import { IonicModule }          from '@ionic/angular';

import { UpcomingPage }         from './upcoming.page';


const routes: Routes = [{ path: '', component: UpcomingPage }];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  
  declarations: [UpcomingPage]
})
export class UpcomingPageModule {}
