import { ComponentsSystemModule } from 'src/shared/components-system/components-system.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AddEditCustomerComponent } from './add-edit-customer/add-edit-customer.component';
import { FwtrTableModule } from 'src/shared/components-system/fwtr-table/fwtr-table.module';


@NgModule({
  declarations: [CustomerListComponent, AddEditCustomerComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ComponentsSystemModule,
    FwtrTableModule
  ]
})
export class CustomersModule { }
