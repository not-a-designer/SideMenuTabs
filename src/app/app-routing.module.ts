import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '',         loadChildren: './pages/tabs/tabs.module#TabsPageModule' }, 
  { path: 'about',    loadChildren: './pages/about/about.page.module#AboutPageModule' },
  { path: 'auth',     loadChildren: './pages/auth/auth.page.module#AuthPageModule' },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes/*, { enableTracing: true }*/) ],

  exports: [ RouterModule ]
})
export class AppRoutingModule {}
