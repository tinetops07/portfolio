import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImainService {

  public menu: any = {
    main: [
      {
        id: 'projects',
        title: 'Projects', 
        isSelected: true
      },
      {
        id: 'about',
        title: 'About',
        isSelected: false

      },
      {
        id: 'contact',
        title: 'Contact',
        isSelected: false

      },
    ]
  }
  public title: string = 'Project';
  constructor() { }
}
