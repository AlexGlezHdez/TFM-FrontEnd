import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesManageRoutingModule } from './activities-manage-routing.module';
import { ActivitiesManageComponent } from './activities-manage.component';

@NgModule({
  imports: [CommonModule, ActivitiesManageRoutingModule],
  declarations: [ActivitiesManageComponent],
})
export class ActivitiesManageModule {}
