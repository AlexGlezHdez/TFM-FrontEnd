import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsManageRoutingModule } from './news-manage-routing.module';
import { NewsManageComponent } from './news-manage.component';
import { ListElementComponent } from '../../Shared/list-element/list-element.component';

@NgModule({
  imports: [CommonModule, NewsManageRoutingModule],
  declarations: [NewsManageComponent, ListElementComponent],
})
export class NewsManageModule {}
