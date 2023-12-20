import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsManageRoutingModule } from './news-manage-routing.module';
import { NewsManageComponent } from './news-manage.component';
import { ListElementModule } from '../../Shared/list-element/list-element.module';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NewsManageRoutingModule,
    ListElementModule,
    ReactiveFormsModule,
  ],
  declarations: [NewsManageComponent],
})
export class NewsManageModule {}
