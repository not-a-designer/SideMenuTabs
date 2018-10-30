import { LocationModalPage }              from '@app-pages/location-modal/location-modal.page';
import { Injectable, ElementRef, NgZone } from '@angular/core';

import { MapsAPILoader }                  from '@agm/core';

import { ModalController }                from '@ionic/angular';
import { Geolocation }                    from '@ionic-native/geolocation/ngx';

import { BehaviorSubject }                from 'rxjs';


declare const google: any;
declare const navigator: any;

const DETAIL_FIELDS: string[] = [ 
  'address_components',
  'formatted_address', 
  //'formatted_phone_number',
  'geometry', 
  'icon', 
  'id', 
  'name', 
  //'opening_hours',
  'permanently_closed', 
  'photos', 
  'place_id', 
  //'rating',
  'types'
];


@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {

  private map: any;
  private autocomplete: any;
  private infoWindow: any;
  private directionsService: any;
  private directionsDisplay: any;
  private placesService: any;
  private geocoder: any;

  public allMarkers: Array<google.maps.Marker> = [];
  public allDetails: Array<google.maps.places.PlaceResult> = [];

  private _radius: number = 2300;
  public zoom: number = 13;
  public center: google.maps.LatLng = null;// = new google.maps.LatLng(43.0389, -87.9065);
  //private _currentLat: number;
  //private _currentLng: number;

  //public currentLat: BehaviorSubject<number> = new BehaviorSubject<number>(43.0389);
  //public currentLng: BehaviorSubject<number> = new BehaviorSubject<number>(-87.9065);

  public selected: google.maps.places.PlaceResult = null;
  public _selectedPhoto: string;
  public selectedPlace: BehaviorSubject<google.maps.places.PlaceResult> = new BehaviorSubject<google.maps.places.PlaceResult>(this.selected);
  public selectedPhoto: BehaviorSubject<string> = new BehaviorSubject<string>(this._selectedPhoto);
  public currentRadius: BehaviorSubject<number> = new BehaviorSubject<number>(2300);

  constructor(private geolocator: Geolocation, 
              private mapsApiLoader: MapsAPILoader,
              private modalCtrl: ModalController,
              private zone: NgZone) {
  }

  /** PUBLIC METHODS **/
  public async browserMapInit(mapRef: ElementRef/*, searchInput: HTMLInputElement*/): Promise<void> {
    /*//AGM wrapper
    await this.mapsApiLoader.load();
    //ensure initializations occur after apiloader completes
    setTimeout(() => {
      //initialize map
      this.map = new google.maps.Map(mapRef.nativeElement, { 
        center: this.center, 
        zoom: this.zoom,
        disableDefaultUI: true,
        clickableIcons: false
      });
      google.maps.event.addListener(this.map, 'click', (event) => {
        this.zone.run(async () => {
          if (await this.modalCtrl.getTop() != undefined) await this.modalCtrl.dismiss();
        })
        
      })
      //google.maps.event.addListenter(this.map, 'click', (event) => console.log(event))
      //new geocoder
      this.initGeocoder();
      //new directionsService
      this.initDirections();
      //new placesService
      this.initPlacesService();
      //new autocomplete listener tied to search input
      //this.initAutocomplete(searchInput);
      //perform nearby search
      this.loadCafes();
    }, 300);*/
  }

  public async loadCafes(): Promise<void> {

    const request: google.maps.places.PlaceSearchRequest = {
      location: new google.maps.LatLng(this.center.lat(), this.center.lng()),
      radius: this._radius,
      //name: 'Colectivo'
      keyword: 'coffee'
    };

    this.placesService.nearbySearch(request, (results: google.maps.places.PlaceResult[], status) => {
      //console.log({ request, results, status });
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log('results: ' + results.length);

        for (let cafe of results) { this.getPlaceDetails(cafe) }
        setTimeout(() => {
          for (let d of this.allDetails) { 
            this.createMarker(this.allDetails.indexOf(d)) 
            //console.log('loc: ', d.name);
          }
        }, 50);
      }
      else console.log('nearby search error');
    });
  }

  public selectShop(p: any): void {
    this.selected = p;
    this.selectedPlace.next(this.selected);
    this.getPlacePhoto(p);
    console.dir(this.selected);
  }

  public setRadius(rad: number): void { 
    this._radius = rad;
    this.currentRadius.next(this._radius);
    this.loadCafes();
    console.log(this._radius);
  }
  /** END PUBLIC METHODS **/
  /**************************************************************************************/
  
  /**************************************************************************************/
  /** PRIVATE METHODS **/
  /** GOOGLE MAPS API INITIALIZATION METHODS **/
  private initGeocoder(): void { this.geocoder = new google.maps.Geocoder() }
  private initPlacesService(): void { this.placesService = new google.maps.places.PlacesService(this.map) }
  
  private initDirections(): void {
    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer();
    //console.log('Directions initialized')
  }

  public initAutocomplete(input: HTMLInputElement): void {
    this.autocomplete = new google.maps.places.Autocomplete(input, { types: ["address"] });
    
    google.maps.event.addListener(this.autocomplete, "place_changed", () => {
      this.zone.run(() => {
      //get the place result
        const place = this.autocomplete.getPlace();
      //verify result
        if (place.geometry === undefined || place.geometry === null)  return;

        else console.log(`place: { ${place.geometry.location.position.lat()}, ${place.geometry.location.poistion.lng()} }`);
      });
    });
    //console.log('Autocomplete initialized');
  }
  /** END GOOGLE MAPS API INITIALIZATION METHODS **/

  /** GOOGLE API METHODS **/
  private createMarker(index: number): void {
    const loc = { 
      lat: this.allDetails[index].geometry.location.lat(), 
      lng: this.allDetails[index].geometry.location.lng() 
    };

    this.getPlacePhoto(this.allDetails[index]);
    //console.log('loc: ', loc);
    const marker = new google.maps.Marker({ map: this.map, position: loc });

    google.maps.event.addListener(marker, 'click', (event) => {
      this.zone.run(async () => {
        try {
          this.map.panTo(marker.getPosition());
          this.selectShop(this.allDetails[index]);
          console.log(this.allDetails[index]);
          //if (this.infoWindow !== undefined) this.infoWindow.close();
          this.setInfoWindow(this.allDetails[index], this._selectedPhoto, event)
          //this.infoWindow.open(this.map, marker);
          
        }
        catch(e) { console.log('click: ', e) }
      
      //console.log('place: ', loc);
      //console.log('marker: ' + marker.position.lat() + ', ' + marker.position.lng());
      });
    });

    this.allMarkers.push(marker);
    //console.log('new marker added: ', marker);
  }

  private getPlaceDetails(place: google.maps.places.PlaceResult): void {
    const detailRequest: google.maps.places.PlaceDetailsRequest = { placeId: place.place_id, fields: DETAIL_FIELDS };

    this.placesService.getDetails(detailRequest, (p: google.maps.places.PlaceResult, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) this.allDetails.push(p);
    });
  }

  getPlacePhoto(place: google.maps.places.PlaceResult) {
    const opts: google.maps.places.PhotoOptions = {  maxWidth: 640 };

    this._selectedPhoto = place.photos[0].getUrl(opts);
    this.selectedPhoto.next(this._selectedPhoto);
  }
  /** END GOOGLE API METHODS **/

  /** IONIC NATIVE GEOLOCATION PLUGIN **/
  public async getNativeLocation(): Promise<void> {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    try {
      const position = await this.geolocator.getCurrentPosition(options);
      this.center = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    }
    catch(e) { console.log('native location error: ', e) }
  }


  /** BROWSER GEOLOCATION **/
  public async getBrowserLocation(): Promise<void> {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    //helper success callback
    const success = (position) => { 
      this.center = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    };

    //helper error callback
    const error = (error) => { console.log('currentLocation error: ', error) };

    //browser geolocation method
    try { await navigator.geolocation.getCurrentPosition(success, error, options) }
    catch(e) { console.log('navigator error: ', e) }
  }

  async setInfoWindow(place: google.maps.places.PlaceResult, image, event) {
    const infoModal = await this.modalCtrl.create({
      component: LocationModalPage,
      componentProps: { place: place, image: image },
      showBackdrop: false,
      backdropDismiss: true,
      cssClass: 'info-window-modal'
    })
    return await infoModal.present();
  }
  /** END PRIVATE METHODS **/
}
