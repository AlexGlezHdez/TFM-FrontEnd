import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityDetailRoutingModule } from './activity-detail-routing.module';
import { ActivityDetailComponent } from './activity-detail.component';

import { ImageMissingDirective } from 'src/app/Directives/image-missing.directive';

@NgModule({
  imports: [CommonModule, ActivityDetailRoutingModule, ImageMissingDirective],
  declarations: [ActivityDetailComponent],
})
export class ActivityDetailModule {}
