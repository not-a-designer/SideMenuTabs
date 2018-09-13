import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage }             from './tabs.page';
import { ContactPage }          from '../contact/contact.page';
import { HomePage }             from '../home/home.page';
import { MapPage }              from '../map/map.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(home:home)',
        pathMatch: 'full',
      }, {
        path: 'home',
        outlet: 'home',
        component: HomePage
      }, {
        path: 'map',
        outlet: 'map',
        component: MapPage
      }, {
        path: 'contact',
        outlet: 'contact',
        component: ContactPage
      }
    ]
  }, {
    path: '',
    redirectTo: '/tabs/(home:home)',
    pathMatch: 'full',
  }, 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
