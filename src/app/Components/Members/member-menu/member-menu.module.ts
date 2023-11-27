import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberMenuRoutingModule } from './member-menu-routing.module';
import { MemberMenuComponent } from './member-menu.component';

import { AdminMenuComponent } from '../../Admin/admin-menu/admin-menu.component';

@NgModule({
  imports: [CommonModule, MemberMenuRoutingModule],
  declarations: [MemberMenuComponent, AdminMenuComponent],
})
export class MemberMenuModule {}
