import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const homeRoute: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Home',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(homeRoute)],
  exports: [RouterModule],
})
export class HomeRouteModule {}
