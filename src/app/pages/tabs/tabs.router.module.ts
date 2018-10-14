import { NgModule }                  from '@angular/core';
import { Routes, RouterModule }      from '@angular/router';

import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule }    from '@angular/fire/firestore';

import { TabsPage }                  from './tabs.page';
import { ContactPage }               from '../contact/contact.page';
import { HomePage }                  from '../home/home.page';
import { MapPage }                   from '../map/map.page';
import { SettingsPage }              from '../settings/settings.page';


const routes: Routes = [
  { path: 'tabs', component: TabsPage, children: [
      { 
        path: 'home', 
        outlet: 'home', 
        component: HomePage 
      },  { 
        path: 'map', 
        outlet: 'map', 
        component: MapPage 
      }, { 
        path: 'contact', 
        outlet: 'contact', 
        component: ContactPage 
      },  {
        path: 'settings', 
        outlet: 'settings',
        component: SettingsPage
      }, { 
        path: '', 
        redirectTo: '/tabs/(home:home)', 
        pathMatch: 'full' 
      }, 
  ]},
  { path: '', redirectTo: '/tabs/(home:home)', pathMatch: 'full' },
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
