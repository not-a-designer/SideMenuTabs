import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '',      loadChildren: './pages/tabs/tabs.module#TabsPageModule' }, 
  { path: 'about', loadChildren: './pages/about/about.page.module#AboutPageModule' },
  { path: 'auth',  loadChildren: './pages/auth/auth.page.module#AuthPageModule' }
];

const routerParams = {
  //enableTracing: true,
  useHash: true
}


@NgModule({
  imports: [ RouterModule.forRoot(routes, routerParams) ],

  exports: [ RouterModule ]
})
export class AppRoutingModule {}
