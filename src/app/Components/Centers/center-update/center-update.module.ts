import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CenterUpdateRoutingModule } from './center-update-routing.module';
import { CenterUpdateComponent } from './center-update.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, CenterUpdateRoutingModule, ReactiveFormsModule],
  declarations: [CenterUpdateComponent],
})
export class CenterUpdateModule {}
