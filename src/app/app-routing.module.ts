import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/shared/layout/layout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  { path: "auth", loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  {path:'', component:LayoutComponent  , children:[
    { path: "customers", loadChildren: () => import('./modules/customers/customers.module').then(m => m.CustomersModule) },
  ]},
  { path: '**', pathMatch: 'full', redirectTo: 'auth' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
