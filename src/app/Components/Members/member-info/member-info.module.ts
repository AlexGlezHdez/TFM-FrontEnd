import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberInfoRoutingModule } from './member-info-routing.module';
import { MemberInfoComponent } from './member-info.component';

@NgModule({
  imports: [CommonModule, MemberInfoRoutingModule],
  declarations: [MemberInfoComponent],
})
export class MemberInfoModule {}
