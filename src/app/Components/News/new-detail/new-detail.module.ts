import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewDetailRoutingModule } from './new-detail-routing.module';
import { NewDetailComponent } from './new-detail.component';

import { ImageMissingDirective } from 'src/app/Directives/image-missing.directive';

@NgModule({
  imports: [CommonModule, NewDetailRoutingModule, ImageMissingDirective],
  declarations: [NewDetailComponent],
})
export class NewDetailModule {}
