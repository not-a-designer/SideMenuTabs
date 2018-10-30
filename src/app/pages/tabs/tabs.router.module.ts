
import { NgModule }                  from '@angular/core';
import { RouterModule, Routes }      from '@angular/router';

import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule }    from '@angular/fire/firestore';

import { TabsPage }                  from '@app-pages/tabs/tabs.page';
import { ActivityPage }              from '@app-pages/activity/activity.page';
import { MapPage }                   from '@app-pages/map/map.page';
import { SearchPage }                from '@app-pages/search/search.page';
import { SettingsPage }              from '@app-pages/settings/settings.page';
import { NearbyPage }                from '@app-pages/search/nearby/nearby.page';
import { UpcomingPage }              from '@app-pages/search/upcoming/upcoming.page';
import { CoffeeSearchPage }          from '@app-pages/search/coffee-search/coffee-search.page';
import { CoffeeshopSearchPage }      from '@app-pages/search/coffeeshop-search/coffeeshop-search.page';


const routes: Routes = [
  { path: 'tabs', component: TabsPage, children: [
    /** MAIN TABS **/
      { path: 'activity', outlet: 'activity', component: ActivityPage },
      { path: 'map', outlet: 'map', component: MapPage },
      { path: 'search', outlet: 'search', component: SearchPage },
      { path: 'settings', outlet: 'settings', component: SettingsPage },

      /** SECONDARY TAB ROUTES */
      { path: 'nearby', outlet: 'search', component: NearbyPage },
      { path: 'upcoming', outlet: 'search', component: UpcomingPage },
      { path: 'coffee/:view', outlet: 'search', component: CoffeeSearchPage },
      { path: 'coffeeshops/:view', outlet: 'search', component: CoffeeshopSearchPage }, 

      /** EMPTY PATH REDIRECT **/
      { path: '', redirectTo: '/tabs/(activity:activity)', pathMatch: 'full' }
  ]},
  { path: '', redirectTo: '/tabs/(activity:activity)', pathMatch: 'full' }
];


@NgModule({
  imports: [
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class TabsPageRoutingModule {}
