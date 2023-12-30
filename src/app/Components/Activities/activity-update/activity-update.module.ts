import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityUpdateRoutingModule } from './activity-update-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivityUpdateComponent } from './activity-update.component';

@NgModule({
  imports: [CommonModule, ActivityUpdateRoutingModule, ReactiveFormsModule],
  declarations: [ActivityUpdateComponent],
})
export class ActivityUpdateModule {}
