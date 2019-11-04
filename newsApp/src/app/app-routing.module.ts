import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  // { path: 'general', loadChildren: './tab2/general/general.module#GeneralPageModule' },
  // { path: 'health', loadChildren: './tab2/health/health.module#HealthPageModule' },
  // { path: 'science', loadChildren: './tab2/science/science.module#SciencePageModule' },
  // { path: 'sports', loadChildren: './tab2/sports/sports.module#SportsPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
