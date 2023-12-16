import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsManageRoutingModule } from './news-manage-routing.module';
import { NewsManageComponent } from './news-manage.component';
import { ListElementModule } from '../../Shared/list-element/list-element.module';

@NgModule({
  imports: [CommonModule, NewsManageRoutingModule, ListElementModule],
  declarations: [NewsManageComponent],
})
export class NewsManageModule {}
