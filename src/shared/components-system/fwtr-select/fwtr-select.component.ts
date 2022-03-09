import { ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { EventValue } from 'src/shared/models/event-value.model';
import { fade } from './select-animations';

@Component({
  selector: 'fwtr-select',
  templateUrl: './fwtr-select.component.html',
  styleUrls: ['./fwtr-select.component.scss'],
  animations: [
    fade
  ]
})
export class FwtrSelectComponent implements OnInit {
  @Input() icon: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() placeholderSearch: string = '';
  @Input() fill: string = '';
  @Input() initialValue: string = '';
  @Input() search: boolean = false;
  @Input() items: any = [];
  @Output() onBlur = new EventEmitter();
  @Output() onChange = new EventEmitter();
  isOpen: boolean = false;
  idRandomInsideSelect = Math.random().toString(36).replace(/[^a-z]+/g, '');
  idRandom = Math.random().toString(36).replace(/[^a-z]+/g, '');
  element: any ;
  constructor(elementRef: ElementRef) {
    this.element = elementRef.nativeElement;
  }

  ngOnInit(): void {
  }


  changeValue(value:string){
    this.onChange.emit({target:{nativeElement:this.element,value}});
    this.isOpen =false;
  }

  @HostListener('document:click', ['$event.target']) onClick(event: any) {
    const elementSelect = event.closest(`#${this.idRandomInsideSelect}`)
    if (this.isOpen && !Boolean(elementSelect)) {
      setTimeout(() => {
        this.isOpen = false;
        this.onBlur.emit(this.element);
      }, 0);
    }
  }

  @HostListener('click', ['$event.target']) selectClick(event: any) {
    const elementSelect = event.closest(`#${this.idRandom}`)
    if (elementSelect) {
      setTimeout(() => {
        this.isOpen = !this.isOpen;
      }, 0);
    }

  }
}
