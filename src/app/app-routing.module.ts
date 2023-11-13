import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    path: 'actividades',
    loadChildren: () =>
      import(
        './Components/Activities/activities-list/activities-list.module'
      ).then((m) => m.ActivitiesListModule),
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
  // Enrutamiento a las paginas de los miembros
  //

  {
    path: 'miembros',
    loadChildren: () =>
      import('./Components/Members/members.module').then(
        (m) => m.MembersModule
      ),
  },

  //
  // Enrutamiento a las paginas de administracion
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
