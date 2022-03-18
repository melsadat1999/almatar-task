export interface SideMenu {
  path:string,
  active?:boolean,
  icon?:string,
  title:string,
  children?:SideMenu[]
  openDropDown?:boolean
}
