import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsManageRoutingModule } from './news-manage-routing.module';
import { NewsManageComponent } from './news-manage.component';

@NgModule({
  imports: [CommonModule, NewsManageRoutingModule],
  declarations: [NewsManageComponent],
})
export class NewsManageModule {}
