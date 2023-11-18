import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BecomeMemberRoutingModule } from './become-member-routing.module';
import { BecomeMemberComponent } from './become-member.component';

@NgModule({
  imports: [CommonModule, BecomeMemberRoutingModule],
  declarations: [BecomeMemberComponent],
})
export class BecomeMemberModule {}
