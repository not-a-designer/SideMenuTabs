import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule }                     from '@angular/router';
import { CommonModule }                     from '@angular/common';
import { FormsModule }                      from '@angular/forms';

import { IonicModule }                      from '@ionic/angular';

import { AgmCoreModule }                    from '@agm/core';

import { environment }                      from '@environments/environment.prod';
import { ComponentsModule }                 from '@app-components/components.module';
import { PipesModule }                      from '@app-pipes/pipes.module';
import { TabsPageRoutingModule }            from '@app-pages/tabs/tabs.router.module';
import { TabsPage }                         from '@app-pages/tabs/tabs.page';
import { SearchPageModule }                 from '@app-pages/search/search.page.module';
import { MapPageModule }                    from '@app-pages/map/map.page.module';
import { SettingsPageModule }               from '@app-pages/settings/settings.page.module';
import { ActivityPageModule }               from '@app-pages/activity/activity.page.module';
import { LocationModalPageModule }          from '@app-pages/location-modal/location-modal.page.module';
import { NearbyPageModule }                 from '@app-pages/search/nearby/nearby.module';
import { UpcomingPageModule }               from '@app-pages/search/upcoming/upcoming.page.module';
import { CoffeeSearchPageModule }           from '@app-pages/search/coffee-search/coffee-search.page.module';
import { CoffeeshopSearchPageModule }       from '@app-pages/search/coffeeshop-search/coffeeshop-search.page.module';;


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule, 
    ComponentsModule,
    PipesModule,
    AgmCoreModule.forRoot(environment.agmConfig),
    TabsPageRoutingModule,
    ActivityPageModule,
    MapPageModule,
    SearchPageModule,
    SettingsPageModule,
    LocationModalPageModule,
    NearbyPageModule,
    UpcomingPageModule,
    CoffeeSearchPageModule,
    CoffeeshopSearchPageModule
  ],

  declarations: [ TabsPage ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class TabsPageModule {}