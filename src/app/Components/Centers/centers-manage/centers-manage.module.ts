import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CentersManageRoutingModule } from './centers-manage-routing.module';
import { CentersManageComponent } from './centers-manage.component';
import { ListElementModule } from '../../Shared/list-element/list-element.module';
//import { ListElementComponent } from '../../Shared/list-element/list-element.component';

@NgModule({
  imports: [CommonModule, CentersManageRoutingModule, ListElementModule],
  declarations: [CentersManageComponent],
})
export class CentersManageModule {}
