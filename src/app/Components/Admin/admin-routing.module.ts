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
      import('../Activities/activities-manage/activities-manage.module').then(
        (m) => m.ActivitiesManageModule
      ),
  },
  {
    path: 'actividad',
    loadChildren: () =>
      import('../Activities/activity-update/activity-update.module').then(
        (m) => m.ActivityUpdateModule
      ),
  },
  {
    path: 'calendario-actividades',
    loadChildren: () =>
      import(
        '../Activities/activity-schedule-manage/activity-schedule-manage.module'
      ).then((m) => m.ActivityScheduleManageModule),
  },
  {
    path: 'actividad-calendario',
    loadChildren: () =>
      import(
        '../Activities/activity-schedule-update/activity-schedule-update.module'
      ).then((m) => m.ActivityScheduleUpdateModule),
  },
  {
    path: 'calendario-cursos',
    loadChildren: () =>
      import(
        '../Courses/course-schedule-manage/course-schedule-manage.module'
      ).then((m) => m.CourseScheduleManageModule),
  },
  {
    path: 'calendario-curso',
    loadChildren: () =>
      import(
        '../Courses/course-schedule-update/course-schedule-update.module'
      ).then((m) => m.CourseScheduleUpdateModule),
  },
  {
    path: 'cursos',
    loadChildren: () =>
      import('../Courses/courses-manage/courses-manage.module').then(
        (m) => m.CoursesManageModule
      ),
  },
  {
    path: 'curso',
    loadChildren: () =>
      import('../Courses/course-update/course-update.module').then(
        (m) => m.CourseUpdateModule
      ),
  },
  {
    path: 'centros-buceo',
    loadChildren: () =>
      import('../Centers/centers-manage/centers-manage.module').then(
        (m) => m.CentersManageModule
      ),
  },
  {
    path: 'centro-buceo',
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
