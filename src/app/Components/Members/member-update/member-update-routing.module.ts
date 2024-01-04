import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberUpdateComponent } from './member-update.component';
const routes: Routes = [
  {
    path: '',
    component: MemberUpdateComponent,
  },
  {
    path: ':id',
    component: MemberUpdateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberUpdateRoutingModule {}
