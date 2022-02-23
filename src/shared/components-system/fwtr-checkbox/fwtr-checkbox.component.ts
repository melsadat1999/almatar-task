import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fwtr-checkbox',
  templateUrl: './fwtr-checkbox.component.html',
  styleUrls: ['./fwtr-checkbox.component.scss']
})
export class FwtrCheckboxComponent implements OnInit {
@Input() label:string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
