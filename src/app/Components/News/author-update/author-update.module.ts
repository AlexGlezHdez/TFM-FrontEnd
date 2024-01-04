import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorUpdateRoutingModule } from './author-update-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthorUpdateComponent } from './author-update.component';

@NgModule({
  imports: [CommonModule, AuthorUpdateRoutingModule, ReactiveFormsModule],
  declarations: [AuthorUpdateComponent],
})
export class AuthorUpdateModule {}
