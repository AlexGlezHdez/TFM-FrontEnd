import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityScheduleManageRoutingModule } from './activity-schedule-manage-routing.module';
import { ActivityScheduleManageComponent } from './activity-schedule-manage.component';
import { ListElementModule } from '../../Shared/list-element/list-element.module';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ActivityScheduleManageRoutingModule,
    ListElementModule,
    ReactiveFormsModule,
  ],
  declarations: [ActivityScheduleManageComponent],
})
export class ActivityScheduleManageModule {}
