import { Component, OnInit } from '@angular/core';

import { AgmMap } from '@agm/core'

@Component({
  selector: 'app-agm',
  templateUrl: './agm.component.html',
  styleUrls: ['./agm.component.scss']
})
export class AgmComponent implements OnInit {

  lat: number = 43.0389;
  lng: number = -87.9065;

  constructor() { }

  ngOnInit() {
  }

}
