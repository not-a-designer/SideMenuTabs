import { Component, Input } from '@angular/core';

import { Coffeeshop }       from '../interfaces/coffeeshop';


@Component({
  selector: 'app-location',
  templateUrl: './app-location.html',
  styleUrls: ['./app-location.scss']
})
export class LocationComponent {

  @Input('location') 
  public location: Coffeeshop;

  constructor() { }

  onAbout() {
    console.log(`Show more information about the ${this.location.name} location...`);
    //TODO
  }

  onNavigate() {
    console.log(`Navigate to the ${this.location.name} location...`);
    //TODO
  }

  onFavorite() {
    console.log(`Set the ${this.location.name} location as your favorite...`)
    //TODO
  }

}
