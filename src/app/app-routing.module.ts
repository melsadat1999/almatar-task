import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  { path: "auth", loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: "customers", loadChildren: () => import('./modules/customers/customers.module').then(m => m.CustomersModule) },
  { path: '**', pathMatch: 'full', redirectTo: 'auth' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
