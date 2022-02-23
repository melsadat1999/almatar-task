import { Component, HostListener, Input, OnInit } from '@angular/core';
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
  @Input() initialValue:string = '';
  isOpen: boolean = false;
  idRandomInsideSelect = Math.random().toString(36).replace(/[^a-z]+/g, '');
  idRandom = Math.random().toString(36).replace(/[^a-z]+/g, '');
 
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('document:click', ['$event.target']) onClick(event: any) {
    const elementSelect = event.closest(`#${this.idRandomInsideSelect}`)
    if (this.isOpen && !Boolean(elementSelect)) {
      setTimeout(() => {
        this.isOpen = false
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
