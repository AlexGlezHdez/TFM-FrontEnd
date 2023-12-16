import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseScheduleUpdateComponent } from './course-schedule-update.component';

import { ReactiveFormsModule } from '@angular/forms';
import { CourseScheduleUpdateRoutingModule } from './course-schedule-update-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CourseScheduleUpdateRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [CourseScheduleUpdateComponent],
})
export class CourseScheduleUpdateModule {}
