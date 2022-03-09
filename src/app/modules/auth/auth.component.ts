import { LangConfig } from './../../../shared/config/lang.config';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader } from './route-animations';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  animations: [
    fader
  ]
})
export class AuthComponent implements OnInit {
  languages = [
    { id: LangConfig.AR,name:'العربية', icon:'assets/icons/saudi-arabia-flag.svg'},
    { id: LangConfig.EN,name:'English', icon:'assets/icons/United-States-flag.svg'}
  ]
  
  features = [
    "إصدار الفواتير الإلكترونية المتطورة",
    "إصدار رمز الإستجابة السريعة لكل فاتورة",
    "إدارة العملاء والموردين",
    "إدارة الفروع والموظفين",
    "متابعة المبيعات",
    "إدارة الأقسام الرئيسية والفرعية",
    "إصدار التقارير",
    "إشتراك بسعر رمزي",
    "خدمة عملاء على مدار الساعة",
  ]
  constructor() { }

  ngOnInit(): void {
 
  }
  prepareRoute(outlet: RouterOutlet) {

    return outlet && outlet.activatedRouteData
  }
}
