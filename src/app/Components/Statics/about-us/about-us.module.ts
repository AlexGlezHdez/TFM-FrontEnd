import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';

@NgModule({
  imports: [CommonModule, AboutRoutingModule],
  declarations: [AboutUsComponent],
})
export class AboutUsModule {}
