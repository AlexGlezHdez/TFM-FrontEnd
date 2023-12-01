import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberInfoRoutingModule } from './member-info-routing.module';
import { MemberInfoComponent } from './member-info.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, MemberInfoRoutingModule, ReactiveFormsModule],
  declarations: [MemberInfoComponent],
})
export class MemberInfoModule {}
