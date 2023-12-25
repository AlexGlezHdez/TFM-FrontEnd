import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesManageRoutingModule } from './courses-manage-routing.module';
import { CoursesManageComponent } from './courses-manage.component';
import { ListElementModule } from '../../Shared/list-element/list-element.module';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CoursesManageRoutingModule,
    ListElementModule,
    ReactiveFormsModule,
  ],
  declarations: [CoursesManageComponent],
})
export class CoursesManageModule {}
