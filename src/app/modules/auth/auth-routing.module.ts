import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { ResignationComponent } from './resignation/resignation.component';

const routes: Routes = [
  { path: '', component: AuthComponent,children:[
    { path: 'login', component: LoginComponent , data: { animation: 'login' } },
    { path: 'resignation', component: ResignationComponent , data: { animation:'resignation' } },
    { path: '', redirectTo: 'login' }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
