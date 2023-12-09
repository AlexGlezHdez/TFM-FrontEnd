import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./Components/Statics/landing/landing.module').then(
        (m) => m.LandingModule
      ),
  },
  {
    path: 'noticias',
    loadChildren: () =>
      import('./Components/News/news-list/news-list.module').then(
        (m) => m.NewsListModule
      ),
  },
  {
    path: 'noticia',
    loadChildren: () =>
      import('./Components/News/new-detail/new-detail.module').then(
        (m) => m.NewDetailModule
      ),
  },
  {
    path: 'actividades',
    loadChildren: () =>
      import(
        './Components/Activities/activities-list/activities-list.module'
      ).then((m) => m.ActivitiesListModule),
  },
  {
    path: 'actividad',
    loadChildren: () =>
      import(
        './Components/Activities/activity-detail/activity-detail.module'
      ).then((m) => m.ActivityDetailModule),
  },
  {
    path: 'escuela/curso',
    loadChildren: () =>
      import('./Components/Courses/course-detail/course-detail.module').then(
        (m) => m.CourseDetailModule
      ),
  },
  {
    path: 'escuela',
    loadChildren: () =>
      import('./Components/Courses/courses-list/courses-list.module').then(
        (m) => m.CoursesListModule
      ),
  },
  {
    path: 'centros-buceo',
    loadChildren: () =>
      import('./Components/Centers/centers-map/centers-map.module').then(
        (m) => m.CentersMapModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./Components/Members/login/login.module').then(
        (m) => m.LoginModule
      ),
  },

  //
  // Enrutamiento a las paginas de los miembros, con guarda de autenticación
  //

  {
    path: 'miembros',
    loadChildren: () =>
      import('./Components/Members/members.module').then(
        (m) => m.MembersModule
      ),
    canActivate: [AuthGuard],
  },

  //
  // Enrutamiento a las paginas de administracion, con guarda de autenticación de administrador
  //

  {
    path: 'admin',
    loadChildren: () =>
      import('./Components/Admin/admin.module').then((m) => m.AdminModule),
  },

  //
  // Enrutamiento a las paginas estaticas
  //

  {
    path: 'quienes-somos',
    loadChildren: () =>
      import('./Components/Statics/about-us/about-us.module').then(
        (m) => m.AboutUsModule
      ),
  },
  {
    path: 'contacto',
    loadChildren: () =>
      import('./Components/Statics/contact/contact.module').then(
        (m) => m.ContactModule
      ),
  },
  {
    path: 'cookies',
    loadChildren: () =>
      import('./Components/Statics/cookies/cookies.module').then(
        (m) => m.CookiesModule
      ),
  },
  {
    path: 'privacidad',
    loadChildren: () =>
      import('./Components/Statics/privacy/privacy.module').then(
        (m) => m.PrivacyModule
      ),
  },
  {
    path: 'hazte-socio',
    loadChildren: () =>
      import('./Components/Statics/become-member/become-member.module').then(
        (m) => m.BecomeMemberModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
