import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityUpdateComponent } from './activity-update.component';

const routes: Routes = [
  {
    path: '',
    component: ActivityUpdateComponent,
  },
  {
    path: ':id',
    component: ActivityUpdateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivityUpdateRoutingModule {}
