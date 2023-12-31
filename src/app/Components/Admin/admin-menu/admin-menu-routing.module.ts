import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminMenuComponent } from './admin-menu.component';
const routes: Routes = [
  {
    path: '',
    component: AdminMenuComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminMenuRoutingModule {}
