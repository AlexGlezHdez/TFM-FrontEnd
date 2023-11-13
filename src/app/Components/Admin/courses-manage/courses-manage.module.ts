import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesManageRoutingModule } from './courses-manage-routing.module';
import { CoursesManageComponent } from './courses-manage.component';

@NgModule({
  imports: [CommonModule, CoursesManageRoutingModule],
  declarations: [CoursesManageComponent],
})
export class CoursesManageModule {}
