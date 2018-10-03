import { AfterViewInit,
         Component, 
         Inject,
         ViewChild, 
         ElementRef }        from '@angular/core';
import { DOCUMENT }          from '@angular/common';

//import { Observable }        from 'rxjs';

//import { FirestoreService }  from '@app-services/firestore.service';
import { GoogleMapsService } from '@app-services/google-maps.service';

@Component({
  selector: 'app-agm',
  templateUrl: './agm.component.html',
  styleUrls: ['./agm.component.scss']
})
export class AgmComponent implements AfterViewInit {

  @ViewChild('map') map: ElementRef;

  public lat: number = 43.1506;
  public lng: number = -87.9579;
  public zoom: number = 13;

  //public locations: Observable<Coffeeshop[]>;
  showToggles: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document, 
              //private firestore: FirestoreService,
              private googleMaps: GoogleMapsService) { }

  public ngAfterViewInit(): void {
    //capture input text from template
    //this.platform.ready().then(() => {
      let input = <HTMLInputElement>this.document.getElementById('search');
      this.googleMaps.initialize(this.map, input);
    //})
    
  }

  public toggleRadius(): void {
    this.showToggles = !this.showToggles;
  }

  /** FETCH FIRESTORE LOCATIONS **/
  public loadCoffeeshops(filter?: any): void { 
    //this.locations = this.firestore.loadColectivo();
  }
}