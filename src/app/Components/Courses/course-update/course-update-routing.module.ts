import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseUpdateComponent } from './course-update.component';

const routes: Routes = [
  {
    path: '',
    component: CourseUpdateComponent,
  },
  {
    path: ':id',
    component: CourseUpdateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseUpdateRoutingModule {}
