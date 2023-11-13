import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListRoutingModule } from './news-list-routing.module';
import { NewsListComponent } from './news-list.component';

@NgModule({
  imports: [CommonModule, NewsListRoutingModule],
  declarations: [NewsListComponent],
})
export class NewsListModule {}
