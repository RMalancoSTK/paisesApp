import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorCapitalComponent } from './por-capital.component';

const porCapitalRoute: Routes = [
  {
    path: '',
    component: PorCapitalComponent,
    data: {
      title: 'Por Capital',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(porCapitalRoute)],
  exports: [RouterModule],
})
export class PorCapitalRouteModule {}
