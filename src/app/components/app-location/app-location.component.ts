
import { ChangeDetectorRef,
         Component,
         OnInit }            from '@angular/core';

import { Observable }        from 'rxjs';

import { GoogleMapsService } from '@app-services/google-maps/google-maps.service';


declare const google: any;


@Component({
  selector: 'app-location',
  templateUrl: './app-location.html',
  styleUrls: ['./app-location.scss']
})
export class LocationComponent implements OnInit {

  public location: google.maps.places.PlaceResult;
  public radius$: Observable<number>;
  public image: string;

  constructor(public googleMaps: GoogleMapsService, private cdr: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.radius$ = this.googleMaps.currentRadius;
    this.googleMaps.selectedPlace.subscribe((loc: google.maps.places.PlaceResult) => {
      this.location = loc;
      console.log('app-loc: ', this.location);

    // work around to ensure the observable updates with every change
    this.cdr.detectChanges();
    });

    this.googleMaps.selectedPhoto.subscribe(image => {
      this.image = image;
      this.cdr.detectChanges();
    });
  }

  public onAbout() {
    //console.log(`Show more information about the ${this.location.name} location...`);
    //TODO
  }

  public onNavigate() {
    //console.log(`Navigate to the ${this.location.name} location...`);
    //TODO
  }

  public onFavorite() {
    //console.log(`Set the ${this.location.name} location as your favorite...`)
    //TODO
  }

}
