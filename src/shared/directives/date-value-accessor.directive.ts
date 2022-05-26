import { Directive, ElementRef, HostListener, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessorDirective } from './value-accessor.directive';

@Directive(
  {
    selector: 'app-datepicker',
    providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: DateValueAccessorDirective,
        multi: true
      },
    ],
  }
  )
export class DateValueAccessorDirective extends ValueAccessorDirective {

  constructor(injector: Injector, el: ElementRef) {
    super(injector, el);
  }
  
  @HostListener('valueChange', ['$event.target'])
  _handleChangeEvent(el: any): void {
    this.handleChangeEvent(el.nativeElement, el.value);
  }
}
