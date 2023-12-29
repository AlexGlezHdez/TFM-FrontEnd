import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesListRoutingModule } from './activities-list-routing.module';
import { ActivitiesListComponent } from './activities-list.component';

import { ImageMissingDirective } from 'src/app/Directives/image-missing.directive';

@NgModule({
  imports: [CommonModule, ActivitiesListRoutingModule, ImageMissingDirective],
  declarations: [ActivitiesListComponent],
})
export class ActivitiesListModule {}
