import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewUpdateComponent } from './new-update.component';
const routes: Routes = [
  {
    path: '',
    component: NewUpdateComponent,
  },
  {
    path: ':id',
    component: NewUpdateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewUpdateRoutingModule {}
