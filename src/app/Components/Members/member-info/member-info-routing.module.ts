import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberInfoComponent } from './member-info.component';
const routes: Routes = [
  {
    path: '',
    component: MemberInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberInfoRoutingModule {}
