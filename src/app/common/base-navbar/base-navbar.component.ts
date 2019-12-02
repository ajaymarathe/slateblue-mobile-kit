import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'base-navbar',
  templateUrl: './base-navbar.component.html',
  styleUrls: ['./base-navbar.component.scss']
})
export class BaseNavbarComponent implements OnInit {

  @Input() bgType: string;
  @Input() bgColor: string;
  @Input() size: string;

  constructor() { }

  ngOnInit() {
  }

}
