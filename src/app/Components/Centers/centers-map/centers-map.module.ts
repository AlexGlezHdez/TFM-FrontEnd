import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CentersMapRoutingModule } from './centers-map-routing.module';
import { CentersMapComponent } from './centers-map.component';
import { ListElementModule } from '../../Shared/list-element/list-element.module';

import { ReactiveFormsModule } from '@angular/forms';

import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  imports: [
    CommonModule,
    CentersMapRoutingModule,
    GoogleMapsModule,
    ListElementModule,
    ReactiveFormsModule,
  ],
  declarations: [CentersMapComponent],
})
export class CentersMapModule {}
