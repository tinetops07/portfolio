import { Component, Input, OnInit } from '@angular/core';
import { ImainService } from '../services/imain.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() header = [{
    id: '',
    title: '',
    subtitle:'',
    isSelected: false,
    text: ''
  }];
  constructor(public iService: ImainService) { }

  ngOnInit(): void {
  }

  changeTitle(title: string) {
    this.header.forEach(header => {
      if (header.title === title) {
        header.isSelected = true;
        this.iService.selected.title = header.text;
        this.iService.selected.id = header.id;
        this.iService.selected.subtitle = header.subtitle;
      }
      else
        header.isSelected = false
    })
  }
}
