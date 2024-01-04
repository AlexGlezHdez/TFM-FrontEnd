import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberUpdateRoutingModule } from './member-update-routing.module';
import { MemberUpdateComponent } from './member-update.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, MemberUpdateRoutingModule, ReactiveFormsModule],
  declarations: [MemberUpdateComponent],
})
export class MemberUpdateModule {}
