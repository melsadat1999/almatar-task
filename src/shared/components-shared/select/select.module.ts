import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FwtrSelectComponent } from './select.component';



@NgModule({
  declarations: [FwtrSelectComponent],
  imports: [
    CommonModule
  ],
  exports:[FwtrSelectComponent]
})
export class SelectModule { }
