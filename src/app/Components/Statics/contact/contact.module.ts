import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ContactRoutingModule, ReactiveFormsModule],
  declarations: [ContactComponent],
})
export class ContactModule {}
