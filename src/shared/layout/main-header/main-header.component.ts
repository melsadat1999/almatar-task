import { Component, OnInit } from '@angular/core';
import { LangConfig } from 'src/shared/config/lang.config';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  languages = [
    { id: LangConfig.AR,name:'العربية', icon:'assets/icons/saudi-arabia-flag.svg'},
    { id: LangConfig.EN,name:'English', icon:'assets/icons/United-States-flag.svg'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
