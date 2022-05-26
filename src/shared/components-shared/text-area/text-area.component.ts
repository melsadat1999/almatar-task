import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent implements OnInit {
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
