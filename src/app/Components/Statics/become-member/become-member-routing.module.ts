import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BecomeMemberComponent } from './become-member.component';

const routes: Routes = [
  {
    path: '',
    component: BecomeMemberComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BecomeMemberRoutingModule {}
