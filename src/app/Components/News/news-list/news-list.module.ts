import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListRoutingModule } from './news-list-routing.module';
import { NewsListComponent } from './news-list.component';

import { ImageMissingDirective } from 'src/app/Directives/image-missing.directive';

@NgModule({
  imports: [CommonModule, NewsListRoutingModule, ImageMissingDirective],
  declarations: [NewsListComponent],
})
export class NewsListModule {}
