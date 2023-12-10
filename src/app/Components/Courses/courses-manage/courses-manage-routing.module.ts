import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesManageComponent } from './courses-manage.component';
const routes: Routes = [
  {
    path: '',
    component: CoursesManageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesManageRoutingModule {}
