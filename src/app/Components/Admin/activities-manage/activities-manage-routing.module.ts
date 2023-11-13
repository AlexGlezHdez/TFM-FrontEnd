import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivitiesManageComponent } from './activities-manage.component';
const routes: Routes = [
  {
    path: '',
    component: ActivitiesManageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivitiesManageRoutingModule {}
