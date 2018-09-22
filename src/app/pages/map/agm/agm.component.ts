import { AfterViewInit,
         Component, 
         Inject,
         ViewChild }             from '@angular/core';

import { DOCUMENT }              from '@angular/common';

import { MenuController }        from '@ionic/angular';

import { AgmMap, MapsAPILoader } from '@agm/core';
import { LatLngLiteral, LatLngBounds }  from '@agm/core/services/google-maps-types';

import { Observable }            from 'rxjs';

import { FirestoreService }      from '@app-services/firestore.service';
import { Coffeeshop }            from '@app-interfaces/coffeeshop';


//TYPESCRIPT DECLARATION
declare let google: any;


@Component({
  selector: 'app-agm',
  templateUrl: './agm.component.html',
  styleUrls: ['./agm.component.scss']
})
export class AgmComponent implements AfterViewInit {

  @ViewChild(AgmMap) public map: AgmMap;

  lat: number = 43.0389;
  lng: number = -87.9065;
  zoom: number = 11;

  locations: Observable<Coffeeshop[]>;

  constructor(@Inject(DOCUMENT) private document: Document, 
              private firestore: FirestoreService, 
              private mapsApiLoader: MapsAPILoader,
              private menuCtrl: MenuController) { }

  ngAfterViewInit() {
    let input = <HTMLInputElement>this.document.getElementById('search');
    this.initAutocomplete(input);
    this.loadCoffeeshops();
    
  }

  loadCoffeeshops(filter?: any) { this.locations = this.firestore.loadColectivo() }

  /** MARKER INFO WINDOW FUNCTIONS **/

  onMouseOver(shop: Coffeeshop) {
    this.firestore.updateLocation(shop); 
    this.menuCtrl.toggle();
  }

  /** END MARKER INFO WINDOW FUNCTIONS **/

  initAutocomplete(input: HTMLInputElement) {
    this.mapsApiLoader.load().then(() => {

      let autocomplete = new google.maps.places.Autocomplete(
        input,
        { types: ["address"] }
      );
      google.maps.event.addListener(autocomplete, "place_changed", () => {
        console.log('input: ' + input.innerText);
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          //verify result
          if (place.geometry === undefined || place.geometry === null)  return;

          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
          this.zoom = 11;
      });
    });
  }

  fitBounds(map) {
    console.log(map);
    let bounds: LatLngBounds;
    //this.map.mapReady.subscribe((map) => {
    console.log('map ready' + bounds.toJSON());
    this.map = map;
    //this.map.fitBounds(this.findMapBounds());
    //});
  }

  findMapBounds(){
    let bounds:LatLngBounds;
    
    this.locations.forEach((list: Coffeeshop[]) => {
      for(let loc of list){
        bounds.extend(new google.maps.LatLng(loc.latLng.lat, loc.latLng.lng));
      }
    })
    
    return bounds;
}



  
}


