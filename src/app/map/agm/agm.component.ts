import { AfterViewInit,
         Component, 
         Inject,
         ViewChild }                  from '@angular/core';

import { DOCUMENT }                   from '@angular/common';

import { AgmMap,  
         MapsAPILoader, 
         AgmInfoWindow }              from '@agm/core';

import { AngularFirestore, 
         AngularFirestoreCollection } from '@angular/fire/firestore';

import { Observable }                 from 'rxjs';

import { Coffeeshop }                 from '../../interfaces/coffeeshop';


//TYPESCRIPT DECLARATION
declare const google: any;


@Component({
  selector: 'app-agm',
  templateUrl: './agm.component.html',
  styleUrls: ['./agm.component.scss']
})
export class AgmComponent implements AfterViewInit {

  @ViewChild('map') public map: AgmMap;

  lat: number = 43.0389;
  lng: number = -87.9065;
  zoom: number = 11;

  private coffeeshops: AngularFirestoreCollection<Coffeeshop>;
  locations: Observable<Coffeeshop[]>;

  constructor(@Inject(DOCUMENT) private document: Document, 
              private afs: AngularFirestore,
              private mapsApiLoader: MapsAPILoader) { }

  ngAfterViewInit() {
    this.loadMap();
    this.loadCoffeeshops();
    
  }

  loadMap() {
    let input = <HTMLInputElement>this.document.getElementById('search');

    this.mapsApiLoader.load().then(() => {
      this.loadCoffeeshops();
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

  loadCoffeeshops(filter?: any) {
    this.coffeeshops = this.afs.collection<Coffeeshop>('colectivo');
    this.locations = this.coffeeshops.valueChanges();    
  }

  /** MARKER INFO WINDOW FUNCTIONS **/

  onMouseOut(infoWindow: AgmInfoWindow) { infoWindow.close() }

  onMouseOver(infoWindow: AgmInfoWindow) { infoWindow.open() }

  /** END MARKER INFO WINDOW FUNCTIONS **/
}
