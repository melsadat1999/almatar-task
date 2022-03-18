import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditCustomerComponent } from './add-edit-customer/add-edit-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

const routes: Routes = [
  { path: '', redirectTo:'list' },

  { path: 'list', component: CustomerListComponent },
  { path: 'add', component: AddEditCustomerComponent },
  { path: 'edit/:id', component: AddEditCustomerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
