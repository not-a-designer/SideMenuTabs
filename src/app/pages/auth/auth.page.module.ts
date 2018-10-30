import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { FormsModule }                      from '@angular/forms';
import { Routes, RouterModule }             from '@angular/router';

import { IonicModule }                      from '@ionic/angular';

import { ComponentsModule }                 from '@app-components/components.module';
import { AuthPage }                         from '@app-pages/auth/auth.page';


const routes: Routes = [{ path: '', component: AuthPage }];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [ AuthPage ],

  exports: [ AuthPage ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AuthPageModule {}
