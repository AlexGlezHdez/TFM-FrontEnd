import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./member-menu/member-menu.module').then(
        (m) => m.MemberMenuModule
      ),
  },
  {
    path: 'datos',
    data: { idM: '2' },
    loadChildren: () =>
      import('./member-info/member-info.module').then(
        (m) => m.MemberInfoModule
      ),
  },
  {
    path: 'actividades',
    loadChildren: () =>
      import('./member-activities/member-activities.module').then(
        (m) => m.MemberActivitiesModule
      ),
  },
  {
    path: 'contrasena',
    loadChildren: () =>
      import('./member-password/member-password.module').then(
        (m) => m.MemberPasswordModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembersRoutingModule {}
