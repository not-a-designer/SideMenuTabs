
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { FormsModule }                      from '@angular/forms';
import { RouterModule, Routes }             from '@angular/router';

import { IonicModule }                      from '@ionic/angular';

import { ComponentsModule }                 from '@app-components/components.module';
import { SettingsPage }                     from './settings.page';
import { AuthPageModule }                   from '../auth/auth.page.module';


const routes: Routes = [{ path: '', component: SettingsPage }];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    AuthPageModule
  ],

  declarations: [ SettingsPage ],

  entryComponents: [],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SettingsPageModule {}
