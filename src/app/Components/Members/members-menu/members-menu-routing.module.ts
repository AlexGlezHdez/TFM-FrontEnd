import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembersMenuComponent } from './members-menu.component';
const routes: Routes = [
  {
    path: '',
    component: MembersMenuComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembersMenuRoutingModule {}
