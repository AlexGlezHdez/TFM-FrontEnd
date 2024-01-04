import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsManageRoutingModule } from './authors-manage-routing.module';
import { AuthorsManageComponent } from './authors-manage.component';
import { ListElementModule } from '../../Shared/list-element/list-element.module';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AuthorsManageRoutingModule,
    ListElementModule,
    ReactiveFormsModule,
  ],
  declarations: [AuthorsManageComponent],
})
export class AuthorsManageModule {}
