import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewDetailRoutingModule } from './new-detail-routing.module';
import { NewDetailComponent } from './new-detail.component';

@NgModule({
  imports: [CommonModule, NewDetailRoutingModule],
  declarations: [NewDetailComponent],
})
export class NewDetailModule {}
