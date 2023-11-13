import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberActivitiesComponent } from './member-activities.component';
const routes: Routes = [
  {
    path: '',
    component: MemberActivitiesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberActivitiesRoutingModule {}
