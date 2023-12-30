import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListRoutingModule } from './courses-list-routing.module';
import { CoursesListComponent } from './courses-list.component';

import { ImageMissingDirective } from 'src/app/Directives/image-missing.directive';

@NgModule({
  imports: [CommonModule, CoursesListRoutingModule, ImageMissingDirective],
  declarations: [CoursesListComponent],
})
export class CoursesListModule {}
