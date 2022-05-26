import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectValueAccessorDirective } from './select-value-accessor.directive';
import { FieldValueAccessorDirective } from './field-value-accessor.directive';
import { DateValueAccessorDirective } from './date-value-accessor.directive';
   


@NgModule({
  declarations: [
    SelectValueAccessorDirective,
    FieldValueAccessorDirective,
    DateValueAccessorDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SelectValueAccessorDirective,
    FieldValueAccessorDirective,
    DateValueAccessorDirective
  ]
})
export class DirectivesModule { }
