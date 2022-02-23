import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MediaScreenService {
  screens = {
    xxl: '1680px',
    lg: '1024px',
    xl: '1280px',
    md: '768px',
    sm: '640px'
  }
  constructor() {

  }
}
