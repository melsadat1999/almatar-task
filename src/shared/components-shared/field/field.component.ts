import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {
  @Input() icon: string = '';
  @Input() label: string = '';
  @Input() type: string = '';
  @Input() placeholder: string = '';
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  emitValue(event:any){
    this.valueChange.emit({
      ...event,
      target:{
        nativeElement:event.target.parentNode.parentNode,
        value:event.target.value
      }

    })
  }

}
