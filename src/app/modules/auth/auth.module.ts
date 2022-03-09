import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ComponentsSystemModule } from 'src/shared/components-system/components-system.module';
import { AuthComponent } from './auth.component';
import { ResignationComponent } from './resignation/resignation.component';
import { DirectivesModule } from 'src/shared/directives/directives.module';
import { FormsModule } from '@angular/forms';
  

@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent,
    ResignationComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ComponentsSystemModule,
    FormsModule
  ],
 
})
export class AuthModule { }
