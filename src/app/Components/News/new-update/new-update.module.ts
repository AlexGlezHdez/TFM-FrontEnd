import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUpdateRoutingModule } from './new-update-routing.module';
import { NewUpdateComponent } from './new-update.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, NewUpdateRoutingModule, ReactiveFormsModule],
  declarations: [NewUpdateComponent],
})
export class NewUpdateModule {}
