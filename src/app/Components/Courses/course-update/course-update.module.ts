import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseUpdateRoutingModule } from './course-update-routing.module';
import { CourseUpdateComponent } from './course-update.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, CourseUpdateRoutingModule, ReactiveFormsModule],
  declarations: [CourseUpdateComponent],
})
export class CourseUpdateModule {}
