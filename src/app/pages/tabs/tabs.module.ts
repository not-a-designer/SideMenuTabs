
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule }                     from '@angular/router';
import { CommonModule }                     from '@angular/common';
import { FormsModule }                      from '@angular/forms';

import { IonicModule }                      from '@ionic/angular';

import { AgmCoreModule }                    from '@agm/core';

import { MAP_API_KEY }                      from '../../app-credentials';
import { TabsPageRoutingModule }            from './tabs.router.module';
import { TabsPage }                         from './tabs.page';
import { ContactPageModule }                from '../contact/contact.module';
import { MapPageModule }                    from '../map/map.module';
import { HomePageModule }                   from '../home/home.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    MapPageModule,
    ContactPageModule,
    AgmCoreModule.forRoot(MAP_API_KEY)
  ],

  declarations: [ TabsPage ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class TabsPageModule {}
