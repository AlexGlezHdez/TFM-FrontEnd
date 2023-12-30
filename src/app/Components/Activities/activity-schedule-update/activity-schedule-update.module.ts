import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityScheduleUpdateRoutingModule } from './activity-schedule-update-routing.module';
import { ActivityScheduleUpdateComponent } from './activity-schedule-update.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ActivityScheduleUpdateRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [ActivityScheduleUpdateComponent],
})
export class ActivityScheduleUpdateModule {}
