import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CentersMapRoutingModule } from './centers-map-routing.module';
import { CentersMapComponent } from './centers-map.component';

import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  imports: [CommonModule, CentersMapRoutingModule, GoogleMapsModule],
  declarations: [CentersMapComponent],
})
export class CentersMapModule {}
