import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembersManageComponent } from './members-manage.component';
const routes: Routes = [
  {
    path: '',
    component: MembersManageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembersManageRoutingModule {}
