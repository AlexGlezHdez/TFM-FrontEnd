import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityScheduleUpdateComponent } from './activity-schedule-update.component';

const routes: Routes = [
  {
    path: '',
    component: ActivityScheduleUpdateComponent,
  },
  {
    path: ':id',
    component: ActivityScheduleUpdateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivityScheduleUpdateRoutingModule {}
