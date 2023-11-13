import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberPasswordComponent } from './member-password.component';
const routes: Routes = [
  {
    path: '',
    component: MemberPasswordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberPasswordRoutingModule {}
