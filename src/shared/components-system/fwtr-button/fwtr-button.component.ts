import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fwtr-button',
  templateUrl: './fwtr-button.component.html',
  styleUrls: ['./fwtr-button.component.scss']
})
export class FwtrButtonComponent implements OnInit {
  @Input() fill: string = '';
  @Input() label: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
