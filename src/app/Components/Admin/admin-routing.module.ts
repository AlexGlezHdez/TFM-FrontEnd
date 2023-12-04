import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/miembros',
    pathMatch: 'full',
  },
  {
    path: 'miembros',
    loadChildren: () =>
      import('./members-list/members-list.module').then(
        (m) => m.MembersListModule
      ),
  },
  {
    path: 'noticias',
    loadChildren: () =>
      import('../News/news-manage/news-manage.module').then(
        (m) => m.NewsManageModule
      ),
  },
  {
    path: 'noticia',
    loadChildren: () =>
      import('../News/new-update/new-update.module').then(
        (m) => m.NewUpdateModule
      ),
  },
  {
    path: 'actividades',
    loadChildren: () =>
      import('./activities-manage/activities-manage.module').then(
        (m) => m.ActivitiesManageModule
      ),
  },
  {
    path: 'cursos',
    loadChildren: () =>
      import('./courses-manage/courses-manage.module').then(
        (m) => m.CoursesManageModule
      ),
  },
  {
    path: 'centros-buceo',
    loadChildren: () =>
      import('./centers-manage/centers-manage.module').then(
        (m) => m.CentersManageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
