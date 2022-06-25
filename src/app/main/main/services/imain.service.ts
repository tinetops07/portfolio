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
        subtitle: '',
        text: 'Projects', 
        isSelected: true
      },
      {
        id: 'about',
        title: 'About',
        subtitle: 'Application Development Senior Analyst',
        text: 'Justine Topacio', 
        isSelected: false

      },
      {
        id: 'contact',
        title: 'Contact',
        subtitle: '',
        text: 'Contact', 
        isSelected: false

      },
    ]
  }
  public selected = {
    title: 'Justine Topacio', 
    subtitle: 'Application Development Senior Analyst',
    id: 'about'
  };
  constructor() { }
}
