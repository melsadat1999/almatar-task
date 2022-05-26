import { AfterViewInit, Directive, ElementRef, HostListener, Injector, OnDestroy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive()

export class ValueAccessorDirective implements ControlValueAccessor, AfterViewInit, OnDestroy {

  protected lastValue: any;
  private onChange = (value: string) => { };
  private onTouched = () => { };

  constructor(protected injector: Injector, protected el: ElementRef) {

  }

  writeValue(value: string): void {
     this.el.nativeElement.value = this.lastValue = value == null ? '' : value;
    this.el.nativeElement.querySelector('input,textarea,app-select').value = this.lastValue = value == null ? '' : value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.el.nativeElement.disabled = isDisabled;
  }

  handleChangeEvent(el: HTMLElement, value: any): void {
    if (el === this.el.nativeElement && value) {
      if (value !== this.lastValue) {
        this.lastValue = value;
        this.onChange(value);
        this.writeValue(value);
      }
    }
  }


  @HostListener('onBlur', ['$event'])
  _handleBlurEvent(el: any): void {
    if (el === this.el.nativeElement) {
      this.onTouched();
    }
  }

 

  ngAfterViewInit(): void {
  }


  ngOnDestroy(): void {
 
  }

}
