import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberMenuComponent } from './member-menu.component';
const routes: Routes = [
  {
    path: '',
    component: MemberMenuComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberMenuRoutingModule {}
