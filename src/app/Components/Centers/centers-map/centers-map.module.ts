import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CentersMapRoutingModule } from './centers-map-routing.module';
import { CentersMapComponent } from './centers-map.component';

@NgModule({
  imports: [CommonModule, CentersMapRoutingModule],
  declarations: [CentersMapComponent],
})
export class CentersMapModule {}
