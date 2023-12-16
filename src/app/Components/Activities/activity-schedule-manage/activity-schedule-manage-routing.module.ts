import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivityScheduleManageComponent } from './activity-schedule-manage.component';
const routes: Routes = [
  {
    path: '',
    component: ActivityScheduleManageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivityScheduleManageRoutingModule {}
