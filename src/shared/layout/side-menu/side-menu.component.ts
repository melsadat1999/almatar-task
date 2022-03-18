import { Component, OnInit } from '@angular/core';
import { BrowserDbService } from 'src/shared/services/browser-db.service';
import { SideMenu } from './side-menu';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})


export class SideMenuComponent implements OnInit {
  menuItems: SideMenu[] = [
    {
      path: '/is',
      icon: 'assets/icons/statics.svg',
      title: 'الإحصائيات'
    },
    {
      path: '/customers',
      icon: 'assets/icons/clients.svg',
      active: false,
      title: 'العملاء',
      children: [
        {
          active: false,
          title: 'كل العملاء',
          path: '/customers/list',
        },
        {
          title: 'عميل جديد',
          path: '/customers/add',
        }
      ]
    }
  ]

  activePath: string = '';
  constructor(private browserDbService: BrowserDbService) { }

  ngOnInit(): void {

   this.routingToPages();
  }

  routingToPages() {
    const paths = window.location.pathname.split('/');
    paths.filter(path => {
      if (path === '') return;
      this.activePath = path;
      this.activeItem(this.menuItems)
    })
  }

  activeItem(items: SideMenu[]) {
    items.forEach(item => {
      if (item.path.includes(this.activePath)) {
        item.active = true;
      }
    });
  }
}
