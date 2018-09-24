
import { Injectable }                  from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';

import { Coffeeshop }                  from './../interfaces/coffeeshop';

declare const google: any;

interface Point {
  lat: number,
  lng: number
}


@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {

  autocomplete: any;
  directionsService: any;
  directionsDisplay: any;
  geocoder: any;
  placesService: any;

  place: google.maps.places.PlaceResult;
  center: BehaviorSubject<Point>;

  constructor() {}

  recenterMap(center: Point) { this.center.next(center) }

  setBounds(locations: Observable<Coffeeshop[]>) {
    const bounds = new google.maps.LatLngBounds();
    
    locations.forEach((coffeeshops: Coffeeshop[]) => {
      for (let shop of coffeeshops) {
        const latLng = new google.maps.LatLng(shop.latLng.lat, shop.latLng.lng);
        bounds.extend(latLng);
      }
    });

    this.center = new BehaviorSubject<Point>(bounds.getCenter());
  }

  initAutocomplete(input: HTMLInputElement): any {
    this.autocomplete = new google.maps.places.Autocomplete(input, { types: ["address"] });
    console.log('Autocomplete initialized');
    
    google.maps.event.addListener(this.autocomplete, "place_changed", () => {
      //get the place result
      this.place = this.autocomplete.getPlace();
      //verify result
      if (this.place.geometry === undefined || this.place.geometry === null)  return;

      else {
        console.log(`place: { ${this.place.geometry.location.lat()}, ${this.place.geometry.location.lng()} }`);
        this.recenterMap({
          lat: this.place.geometry.location.lat(), 
          lng: this.place.geometry.location.lng()
        });
      }
    });
  }

  initGeocoder() { 
    this.geocoder = new google.maps.Geocoder();
    console.log('Geocoder initialized');
  }

  gecodeAddress(address) {
    //TODO
  }

  initDirections() {
    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer();
    console.log('Directions initialized')
  }

  initPlacesService(map) {
    this.placesService = new google.maps.places.PlacesService(map);
    console.log('Places initialized');
  }

  calculateRoute(start, dest) {
    //TODO
  }

  loadCafes(location) {
    const req = {
      location: location,
      radius: 1000,
      types: ['cafe']
    }

    this.placesService.nearbySearch(req, (results, status) => {
      
    });
  }
}
