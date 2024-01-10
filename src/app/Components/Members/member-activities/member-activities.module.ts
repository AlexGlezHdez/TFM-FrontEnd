import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberActivitiesRoutingModule } from './member-activities-routing.module';
import { MemberActivitiesComponent } from './member-activities.component';
import { ListElementModule } from '../../Shared/list-element/list-element.module';

@NgModule({
  imports: [CommonModule, MemberActivitiesRoutingModule, ListElementModule],
  declarations: [MemberActivitiesComponent],
})
export class MemberActivitiesModule {}
