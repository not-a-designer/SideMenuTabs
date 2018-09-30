import { AfterViewInit,
         Component, 
         Inject,
         ViewChild, 
         ElementRef }        from '@angular/core';

import { DOCUMENT }          from '@angular/common';

import { Observable }        from 'rxjs';

import { FirestoreService }  from '@app-services/firestore.service';
import { GoogleMapsService } from '@app-services/google-maps.service';
import { Coffeeshop }        from '../../../interfaces/coffeeshop';


@Component({
  selector: 'app-agm',
  templateUrl: './agm.component.html',
  styleUrls: ['./agm.component.scss']
})
export class AgmComponent implements AfterViewInit {

  @ViewChild('map') map: ElementRef;

  public lat: number = 43.1506;
  public lng: number = -87.9579;
  public zoom: number = 11;

  public locations: Observable<Coffeeshop[]>;

  directionsService: any;
  directionsDisplay: any;
  showToggles: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document, 
              private firestore: FirestoreService,
              private googleMaps: GoogleMapsService) { }

  ngAfterViewInit() {
    //capture input text from template
    let input = <HTMLInputElement>this.document.getElementById('search');
    this.googleMaps.initialize(this.map, input);
  }

  toggleRadius() {
    this.showToggles = !this.showToggles;
  }

  /** FETCH FIRESTORE LOCATIONS **/
  loadCoffeeshops(filter?: any) { 
    //this.locations = this.firestore.loadColectivo();
    
  }
}