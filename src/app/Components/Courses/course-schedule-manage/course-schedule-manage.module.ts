import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseScheduleManageRoutingModule } from './course-schedule-manage-routing.module';
import { CourseScheduleManageComponent } from './course-schedule-manage.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CourseScheduleManageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [CourseScheduleManageComponent],
})
export class CourseScheduleManageModule {}
