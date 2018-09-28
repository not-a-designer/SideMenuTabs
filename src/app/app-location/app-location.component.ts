import { Observable } from 'rxjs';
import { AfterViewInit, 
         Component,
         OnInit }  from '@angular/core';

import { GoogleMapsService } from '@app-services/google-maps.service';

import { Coffeeshop }        from '../interfaces/coffeeshop';


@Component({
  selector: 'app-location',
  templateUrl: './app-location.html',
  styleUrls: ['./app-location.scss']
})
export class LocationComponent implements OnInit {

  //@Input('location') 
  public location: any;
  location$: Observable<any>;

  constructor(public googleMaps: GoogleMapsService) { 
  }

  ngOnInit() {
    this.location$ = this.googleMaps.selectedPlace;
    //this.location = this.googleMaps.selected;
    /*this.googleMaps.selectedPlace.subscribe((loc: google.maps.places.PlaceResult) => {
      this.location = loc;
      console.log('app-loc: ', this.location)
    });*/
  }

  onAbout() {
    //console.log(`Show more information about the ${this.location.name} location...`);
    //TODO
  }

  onNavigate() {
    //console.log(`Navigate to the ${this.location.name} location...`);
    //TODO
  }

  onFavorite() {
    //console.log(`Set the ${this.location.name} location as your favorite...`)
    //TODO
  }

}
