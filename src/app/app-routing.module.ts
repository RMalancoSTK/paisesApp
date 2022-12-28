import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pais/pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pais/pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pais/pages/home/home.module').then((m) => m.HomeModule),
    pathMatch: 'full',
  },
  {
    path: '**',
    loadChildren: () =>
      import('./pais/pages/home/home.module').then((m) => m.HomeModule),
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
