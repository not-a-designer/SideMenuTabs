import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '',         loadChildren: './pages/tabs/tabs.module#TabsPageModule' }, 
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' }, 
  { path: 'about',    loadChildren: './pages/about/about.module#AboutPageModule' } 
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],

  exports: [ RouterModule ]
})
export class AppRoutingModule {}
