import { AfterViewInit,
         Component, 
         Inject,
         ViewChild }             from '@angular/core';

import { DOCUMENT }              from '@angular/common';

import { MenuController }        from '@ionic/angular';

import { AgmMap, MapsAPILoader } from '@agm/core';

import { Observable }            from 'rxjs';

import { FirestoreService }      from '@app-services/firestore.service';
import { GoogleMapsService }     from '@app-services/google-maps.service';
import { Coffeeshop }            from '../../../interfaces/coffeeshop';


//TYPESCRIPT DECLARATION
declare const google: any;


@Component({
  selector: 'app-agm',
  templateUrl: './agm.component.html',
  styleUrls: ['./agm.component.scss']
})
export class AgmComponent implements AfterViewInit {

  @ViewChild(AgmMap) 
  public map: AgmMap;

  public lat: number = 43.1506;
  public lng: number = -87.9579;
  public zoom: number = 11;

  public locations: Observable<Coffeeshop[]>;

  directionsService: any;
  directionsDisplay: any;

  constructor(@Inject(DOCUMENT) private document: Document, 
              private firestore: FirestoreService,
              private googleMaps: GoogleMapsService, 
              private mapsApiLoader: MapsAPILoader,
              private menuCtrl: MenuController) { }

  ngAfterViewInit() {
    //capture input text from template
    let input = <HTMLInputElement>this.document.getElementById('search');
    let directionsButton = <HTMLButtonElement>this.document.getElementById('directions');

    //load AGM MapAPI
    this.mapsApiLoader.load().then(() => {
      //fetch locations
      this.loadCoffeeshops();
      
      //set bounds
      this.setBounds();

      //initialize directions
      this.googleMaps.initDirections();

      //initialize autocomplete
      this.googleMaps.initAutocomplete(input);

      this.googleMaps.initGeocoder();
    });    


  }

  /** FETCH FIRESTORE LOCATIONS **/
  loadCoffeeshops(filter?: any) { this.locations = this.firestore.loadColectivo() }


  /** GOOGLE MAPS API METHODS **/
  setBounds() {
    this.googleMaps.setBounds(this.locations);
    this.googleMaps.center.subscribe((c) => {
      this.lat = c.lat;
      this.lng = c.lng;
    });
  } 
  


  /** END GOOGLE MAPS API METHODS **/


  /** AGM-MAP, AGM-MARKER METHODS **/
  onMouseOver(shop: Coffeeshop) {
    this.firestore.updateLocation(shop); 
    this.menuCtrl.toggle();
  }
  /** END MARKER INFO WINDOW METHODS **/

  

  


}