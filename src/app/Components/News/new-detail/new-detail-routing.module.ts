import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewDetailComponent } from './new-detail.component';

const routes: Routes = [
  {
    path: '',
    component: NewDetailComponent,
  },
  {
    path: ':id',
    component: NewDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewDetailRoutingModule {}
