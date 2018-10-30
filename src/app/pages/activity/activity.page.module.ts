import { NgModule }              from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule }          from '@angular/common';
import { FormsModule }           from '@angular/forms';

import { IonicModule }           from '@ionic/angular';

import { ActivityPage }          from '@app-pages/activity/activity.page';


const routes: Routes = [{ path: '', component: ActivityPage }];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],

  declarations: [ ActivityPage ],

  exports: [ ActivityPage ]
})
export class ActivityPageModule {}
