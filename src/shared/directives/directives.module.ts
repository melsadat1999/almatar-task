import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectValueAccessorDirective } from './select-value-accessor.directive';
   


@NgModule({
  declarations: [
    SelectValueAccessorDirective,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SelectValueAccessorDirective
  ]
})
export class DirectivesModule { }
