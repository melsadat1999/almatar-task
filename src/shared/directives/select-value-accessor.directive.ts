import { Directive, ElementRef, HostListener, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessorDirective } from './value-accessor.directive';

@Directive(
  {
    selector: 'fwtr-select',
    providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: SelectValueAccessorDirective,
        multi: true
      },
    ],
  }
  )
export class SelectValueAccessorDirective extends ValueAccessorDirective {

  constructor(injector: Injector, el: ElementRef) {
    super(injector, el);
  }
  
  @HostListener('onChange', ['$event.target'])
  _handleChangeEvent(el: any): void {
    console.log(el)
    this.handleChangeEvent(el.nativeElement, el.value);
  }
}
