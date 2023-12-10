import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentersManageComponent } from './centers-manage.component';
const routes: Routes = [
  {
    path: '',
    component: CentersManageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentersManageRoutingModule {}
