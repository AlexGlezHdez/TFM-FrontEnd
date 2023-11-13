import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CentersManageRoutingModule } from './centers-manage-routing.module';
import { CentersManageComponent } from './centers-manage.component';

@NgModule({
  imports: [CommonModule, CentersManageRoutingModule],
  declarations: [CentersManageComponent],
})
export class CentersManageModule {}
