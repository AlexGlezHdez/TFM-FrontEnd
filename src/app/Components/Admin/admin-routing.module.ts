import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { authAdminGuard } from 'src/app/Guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/miembros',
    pathMatch: 'full',
  },
  {
    path: 'miembros',
    canActivate: [authAdminGuard],
    loadChildren: () =>
      import('./members-list/members-list.module').then(
        (m) => m.MembersListModule
      ),
  },
  {
    path: 'noticias',
    canActivate: [authAdminGuard],
    loadChildren: () =>
      import('../News/news-manage/news-manage.module').then(
        (m) => m.NewsManageModule
      ),
  },
  {
    path: 'noticia',
    canActivate: [authAdminGuard],
    loadChildren: () =>
      import('../News/new-update/new-update.module').then(
        (m) => m.NewUpdateModule
      ),
  },
  {
    path: 'actividades',
    canActivate: [authAdminGuard],
    loadChildren: () =>
      import('../Activities/activities-manage/activities-manage.module').then(
        (m) => m.ActivitiesManageModule
      ),
  },
  {
    path: 'actividad',
    canActivate: [authAdminGuard],
    loadChildren: () =>
      import('../Activities/activity-update/activity-update.module').then(
        (m) => m.ActivityUpdateModule
      ),
  },
  {
    path: 'calendario-actividades',
    canActivate: [authAdminGuard],
    loadChildren: () =>
      import(
        '../Activities/activity-schedule-manage/activity-schedule-manage.module'
      ).then((m) => m.ActivityScheduleManageModule),
  },
  {
    path: 'calendario-actividad',
    canActivate: [authAdminGuard],
    loadChildren: () =>
      import(
        '../Activities/activity-schedule-update/activity-schedule-update.module'
      ).then((m) => m.ActivityScheduleUpdateModule),
  },
  {
    path: 'calendario-cursos',
    canActivate: [authAdminGuard],
    loadChildren: () =>
      import(
        '../Courses/course-schedule-manage/course-schedule-manage.module'
      ).then((m) => m.CourseScheduleManageModule),
  },
  {
    path: 'calendario-curso',
    canActivate: [authAdminGuard],
    loadChildren: () =>
      import(
        '../Courses/course-schedule-update/course-schedule-update.module'
      ).then((m) => m.CourseScheduleUpdateModule),
  },
  {
    path: 'cursos',
    canActivate: [authAdminGuard],
    loadChildren: () =>
      import('../Courses/courses-manage/courses-manage.module').then(
        (m) => m.CoursesManageModule
      ),
  },
  {
    path: 'curso',
    canActivate: [authAdminGuard],
    loadChildren: () =>
      import('../Courses/course-update/course-update.module').then(
        (m) => m.CourseUpdateModule
      ),
  },
  {
    path: 'centros-buceo',
    canActivate: [authAdminGuard],
    loadChildren: () =>
      import('../Centers/centers-manage/centers-manage.module').then(
        (m) => m.CentersManageModule
      ),
  },
  {
    path: 'centro-buceo',
    canActivate: [authAdminGuard],
    loadChildren: () =>
      import('../Centers/center-update/center-update.module').then(
        (m) => m.CenterUpdateModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
