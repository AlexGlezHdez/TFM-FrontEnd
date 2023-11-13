import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesListRoutingModule } from './activities-list-routing.module';
import { ActivitiesListComponent } from './activities-list.component';

@NgModule({
  imports: [CommonModule, ActivitiesListRoutingModule],
  declarations: [ActivitiesListComponent],
})
export class ActivitiesListModule {}
