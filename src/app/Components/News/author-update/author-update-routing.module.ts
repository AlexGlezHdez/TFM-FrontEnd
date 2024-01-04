import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorUpdateComponent } from './author-update.component';

const routes: Routes = [
  {
    path: '',
    component: AuthorUpdateComponent,
  },
  {
    path: ':id',
    component: AuthorUpdateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorUpdateRoutingModule {}
