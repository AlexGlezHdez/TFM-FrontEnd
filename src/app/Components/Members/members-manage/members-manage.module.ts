import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersManageRoutingModule } from './members-manage-routing.module';
import { MembersManageComponent } from './members-manage.component';
import { ListElementModule } from '../../Shared/list-element/list-element.module';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MembersManageRoutingModule,
    ListElementModule,
    ReactiveFormsModule,
  ],
  declarations: [MembersManageComponent],
})
export class MembersManageModule {}
