import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseDetailRoutingModule } from './course-detail-routing.module';
import { CourseDetailComponent } from './course-detail.component';

import { ImageMissingDirective } from 'src/app/Directives/image-missing.directive';

@NgModule({
  imports: [CommonModule, CourseDetailRoutingModule, ImageMissingDirective],
  declarations: [CourseDetailComponent],
})
export class CourseDetailModule {}
