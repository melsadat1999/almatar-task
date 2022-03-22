import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldComponent } from './field/field.component';
import { FwtrButtonComponent } from './fwtr-button/fwtr-button.component';
import { FwtrCheckboxComponent } from './fwtr-checkbox/fwtr-checkbox.component';
import { FwtrSelectComponent } from './fwtr-select/fwtr-select.component';
import { DirectivesModule } from '../directives/directives.module';
import { FwtrTableComponent } from './fwtr-table/fwtr-table.component';
import { SwitchComponent } from './switch/switch.component';



@NgModule({
  declarations: [
    FieldComponent,
    FwtrButtonComponent,
    FwtrCheckboxComponent,
    FwtrSelectComponent,
    SwitchComponent,
   ],
  imports: [
    CommonModule,
    DirectivesModule
  ],
  exports: [FieldComponent,FwtrButtonComponent,FwtrCheckboxComponent, FwtrSelectComponent,SwitchComponent,DirectivesModule]
})
export class ComponentsSystemModule { }
