import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { FormsModule }                      from '@angular/forms';
import { Routes, RouterModule }             from '@angular/router';

import { IonicModule }                      from '@ionic/angular';

import { AuthPage }                         from './auth.page';
import { LoginComponent }                   from './login/login.component';
import { RegisterComponent }                from './register/register.component';


const routes: Routes = [{ path: '', component: AuthPage }];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AuthPage,
    LoginComponent,
    RegisterComponent
  ],
  exports: [
    AuthPage, 
    LoginComponent, 
    RegisterComponent 
  ],

  entryComponents: [ RegisterComponent, LoginComponent ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AuthPageModule {}
