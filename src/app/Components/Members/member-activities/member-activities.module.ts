import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberActivitiesRoutingModule } from './member-activities-routing.module';
import { MemberActivitiesComponent } from './member-activities.component';

@NgModule({
  imports: [CommonModule, MemberActivitiesRoutingModule],
  declarations: [MemberActivitiesComponent],
})
export class MemberActivitiesModule {}
