import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesManageRoutingModule } from './activities-manage-routing.module';
import { ActivitiesManageComponent } from './activities-manage.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ActivitiesManageRoutingModule, ReactiveFormsModule],
  declarations: [ActivitiesManageComponent],
})
export class ActivitiesManageModule {}
