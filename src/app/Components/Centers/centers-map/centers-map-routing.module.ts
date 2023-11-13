import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentersMapComponent } from './centers-map.component';
const routes: Routes = [
  {
    path: '',
    component: CentersMapComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentersMapRoutingModule {}
