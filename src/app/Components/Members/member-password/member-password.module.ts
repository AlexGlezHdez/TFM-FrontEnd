import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberPasswordRoutingModule } from './member-password-routing.module';
import { MemberPasswordComponent } from './member-password.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MemberPasswordRoutingModule],
  declarations: [MemberPasswordComponent],
})
export class MemberPasswordModule {}
