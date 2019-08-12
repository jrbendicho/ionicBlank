import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	//empty path
  { path: '',redirectTo: 'home', pathMatch: 'full'},
  // home component
  { path: 'home', /*outlet:'application-main', */ loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  // dashboard component
 // { path: 'dashboard',outlet:'home-outlet', loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
