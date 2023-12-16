import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseScheduleUpdateComponent } from './course-schedule-update.component';

const routes: Routes = [
  {
    path: '',
    component: CourseScheduleUpdateComponent,
  },
  {
    path: ':id',
    component: CourseScheduleUpdateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseScheduleUpdateRoutingModule {}
