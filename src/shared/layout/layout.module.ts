import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './main-header/main-header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { LayoutComponent } from './layout.component';
 


@NgModule({
  declarations: [
    MainHeaderComponent,
    SideMenuComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
   ],
  exports:[
    MainHeaderComponent,
    SideMenuComponent,
    LayoutComponent
  ]
})
export class LayoutModule { }
