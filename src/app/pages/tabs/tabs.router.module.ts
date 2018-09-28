import { NgModule }                  from '@angular/core';
import { Routes, RouterModule }      from '@angular/router';

import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule }    from '@angular/fire/firestore';

import { TabsPage }                  from './tabs.page';
import { ContactPage }               from '../contact/contact.page';
import { HomePage }                  from '../home/home.page';
import { MapPage }                   from '../map/map.page';


const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/tabs/(home:home)', 
    pathMatch: 'full' },

  { 
    path: 'tabs', 
    component: TabsPage, 
    children: [
      { 
        path: '', 
        redirectTo: '/tabs/(home:home)', 
        pathMatch: 'full' 
      }, { 
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
      }
    ]
  }
];


@NgModule({
  imports: [
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
