import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { NbCardModule, NbToastrModule } from '@nebular/theme';

import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NbCardModule,
    NbToastrModule.forRoot(),
    FormsModule,
    ToastrModule.forRoot(),
  ]
})
export class AuthModule { }
