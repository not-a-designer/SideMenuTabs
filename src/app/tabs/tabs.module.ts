import { RouterModule }          from '@angular/router';
import { NgModule }              from '@angular/core';
import { CommonModule }          from '@angular/common';
import { FormsModule }           from '@angular/forms';

import { IonicModule }           from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs.router.module';
import { TabsPage }              from './tabs.page';
import { ContactPageModule }     from '../contact/contact.module';
import { MapPageModule }         from '../map/map.module';
import { AboutPageModule }       from '../about/about.module'
import { HomePageModule }        from '../home/home.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    AboutPageModule,
    HomePageModule,
    MapPageModule,
    ContactPageModule
  ],

  declarations: [ TabsPage ]
})
export class TabsPageModule {}
