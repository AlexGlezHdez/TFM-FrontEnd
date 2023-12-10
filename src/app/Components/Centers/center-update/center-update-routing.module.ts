import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CenterUpdateComponent } from './center-update.component';
const routes: Routes = [
  {
    path: '',
    component: CenterUpdateComponent,
  },
  {
    path: ':id',
    component: CenterUpdateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CenterUpdateRoutingModule {}
