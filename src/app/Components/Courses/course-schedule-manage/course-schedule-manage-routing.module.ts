import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseScheduleManageComponent } from './course-schedule-manage.component';
const routes: Routes = [
  {
    path: '',
    component: CourseScheduleManageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseScheduleManageRoutingModule {}
