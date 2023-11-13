import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersListRoutingModule } from './members-list-routing.module';
import { MembersListComponent } from './members-list.component';

@NgModule({
  imports: [CommonModule, MembersListRoutingModule],
  declarations: [MembersListComponent],
})
export class MembersListModule {}
