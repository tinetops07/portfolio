import { Component, OnInit } from '@angular/core';
import { ImainService } from '../services/imain.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public iService: ImainService) { }

  ngOnInit(): void {
  }

}
