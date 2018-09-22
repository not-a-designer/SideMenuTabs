import { Component, 
         Input, 
         OnInit }     from '@angular/core';

import { Coffeeshop } from '../interfaces/coffeeshop';


@Component({
  selector: 'app-location',
  templateUrl: './app-location.html',
  styleUrls: ['./app-location.scss']
})
export class LocationComponent implements OnInit {

  @Input('location') public location: Coffeeshop;

  constructor() { }

  ngOnInit() {
  }

}
