import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';

import { IonicModule }  from '@ionic/angular';

import { ContactPage }  from './contact.page';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { 
        path: '', 
        component: ContactPage 
      }
    ])
  ],

  declarations: [ ContactPage ]
})
export class ContactPageModule {}
