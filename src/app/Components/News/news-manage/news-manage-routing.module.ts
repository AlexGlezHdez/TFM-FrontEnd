import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsManageComponent } from './news-manage.component';
const routes: Routes = [
  {
    path: '',
    component: NewsManageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsManageRoutingModule {}
