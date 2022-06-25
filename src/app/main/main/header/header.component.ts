import { Component, Input, OnInit } from '@angular/core';
import { ImainService } from '../services/imain.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() header = [{
    title: '',
    isSelected: false
  }];
  constructor(public iService: ImainService) { }

  ngOnInit(): void {
  }

  changeTitle(title: string) {
    this.iService.title = title;
    this.header.forEach(header => {
      if (header.title === title)
        header.isSelected = true;
      else 
        header.isSelected = false
    })
  }
}
