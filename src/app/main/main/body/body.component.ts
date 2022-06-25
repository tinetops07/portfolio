import { Component, OnInit } from '@angular/core';
import { ImainService } from '../services/imain.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  constructor(public iService: ImainService) { }

  ngOnInit(): void {
  }

}
