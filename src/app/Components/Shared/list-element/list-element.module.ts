import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListElementComponent } from './list-element.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ListElementComponent],
  exports: [ListElementComponent],
})
export class ListElementModule {}
