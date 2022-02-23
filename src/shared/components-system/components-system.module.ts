import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldComponent } from './field/field.component';
import { FwtrButtonComponent } from './fwtr-button/fwtr-button.component';
import { FwtrCheckboxComponent } from './fwtr-checkbox/fwtr-checkbox.component';
import { FwtrSelectComponent } from './fwtr-select/fwtr-select.component';



@NgModule({
  declarations: [
    FieldComponent,
    FwtrButtonComponent,
    FwtrCheckboxComponent,
    FwtrSelectComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [FieldComponent,FwtrButtonComponent,FwtrCheckboxComponent, FwtrSelectComponent]
})
export class ComponentsSystemModule { }
