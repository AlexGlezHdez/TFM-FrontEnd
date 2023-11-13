import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersMenuRoutingModule } from './members-menu-routing.module';
import { MembersMenuComponent } from './members-menu.component';

import { AdminMenuComponent } from '../../Admin/admin-menu/admin-menu.component';

@NgModule({
  imports: [CommonModule, MembersMenuRoutingModule],
  declarations: [MembersMenuComponent, AdminMenuComponent],
})
export class MembersMenuModule {}
