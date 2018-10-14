
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule }                     from '@angular/router';
import { CommonModule }                     from '@angular/common';
import { FormsModule }                      from '@angular/forms';

import { IonicModule }                      from '@ionic/angular';

import { AgmCoreModule }                    from '@agm/core';

import { environment }                      from '@environments/environment.prod';
import { ComponentsModule }                 from '@app-components/components.module';
import { TabsPageRoutingModule }            from './tabs.router.module';
import { TabsPage }                         from './tabs.page';
import { ContactPageModule }                from '../contact/contact.module';
import { MapPageModule }                    from '../map/map.module';
import { HomePageModule }                   from '../home/home.module';
import { AuthPageModule }                   from '../auth/auth.page.module';
import { SettingsPageModule }               from '../settings/settings.page.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule, 
    TabsPageRoutingModule,
    HomePageModule,
    MapPageModule,
    ContactPageModule,
    AgmCoreModule.forRoot(environment.agmConfig),
    ComponentsModule,
    AuthPageModule,
    SettingsPageModule
  ],

  declarations: [ TabsPage ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class TabsPageModule {}