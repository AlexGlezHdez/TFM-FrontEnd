import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityScheduleManageRoutingModule } from './activity-schedule-manage-routing.module';
import { ActivityScheduleManageComponent } from './activity-schedule-manage.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ActivityScheduleManageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [ActivityScheduleManageComponent],
})
export class ActivityScheduleManageModule {}
