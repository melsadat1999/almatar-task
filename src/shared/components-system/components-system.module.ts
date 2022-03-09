import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldComponent } from './field/field.component';
import { FwtrButtonComponent } from './fwtr-button/fwtr-button.component';
import { FwtrCheckboxComponent } from './fwtr-checkbox/fwtr-checkbox.component';
import { FwtrSelectComponent } from './fwtr-select/fwtr-select.component';
import { DirectivesModule } from '../directives/directives.module';



@NgModule({
  declarations: [
    FieldComponent,
    FwtrButtonComponent,
    FwtrCheckboxComponent,
    FwtrSelectComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule
  ],
  exports: [FieldComponent,FwtrButtonComponent,FwtrCheckboxComponent, FwtrSelectComponent,DirectivesModule]
})
export class ComponentsSystemModule { }
