import { Injectable }      from '@angular/core';

import { MapsAPILoader }   from '@agm/core';

import { BehaviorSubject } from 'rxjs';

declare var google: any;


@Injectable({
  providedIn: 'root'
})
export class AgmMapService {

  map: any;

  lat: BehaviorSubject<number> = new BehaviorSubject<number>(43.0389);
  lng: BehaviorSubject<number> = new BehaviorSubject<number>(-87.9065);
  zoom: BehaviorSubject<number> = new BehaviorSubject<number>(11);

  constructor(private mapsApiLoader: MapsAPILoader) { }

  
  startGACListener(input: HTMLInputElement): google.maps.places.PlaceGeometry | void {
    //map ready
    this.mapsApiLoader.load().then(() => {

      let autocomplete = new google.maps.places.Autocomplete(input, { types: ["address"] });

      google.maps.event.addListener(autocomplete, "place_changed", () => {
        console.log('input: ' + input.innerText);
        //get the place result
        let place: google.maps.places.PlaceResult = autocomplete.getPlace();
        //verify result
        if (place.geometry === undefined || place.geometry === null)  return;
        
        this.lat.next(place.geometry.location.lat());
        this.lng.next(place.geometry.location.lng());
      });
    });
  }
}
