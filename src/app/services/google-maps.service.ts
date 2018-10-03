import { Injectable, ElementRef } from '@angular/core';

import { MapsAPILoader }          from '@agm/core';

import { Platform }               from '@ionic/angular';
import { Geolocation }            from '@ionic-native/geolocation/ngx';

import { BehaviorSubject }        from 'rxjs';


declare const google: any;
declare const navigator: any;

const DETAIL_FIELDS: string[] = [ 
  'formatted_address', 
  'geometry', 
  'icon', 
  'id', 
  'name', 
  'permanently_closed', 
  'photos', 
  'place_id', 
  'formatted_phone_number' 
];


@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {

  private map: any;
  private autocomplete: any;
  private directionsService: any;
  private directionsDisplay: any;
  private placesService: any;
  private geocoder: any;
  

  private options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  public allMarkers = [];
  public allDetails = [];

  public center: google.maps.LatLng = null;
  private _currentLat: number;
  private _currentLng: number;

  public currentLat: BehaviorSubject<number> = new BehaviorSubject<number>(43.0389);
  public currentLng: BehaviorSubject<number> = new BehaviorSubject<number>(-87.9065);

  private _radius: number = 2300;
  public zoom: number = 13;


  public selected: google.maps.places.PlaceResult = null;
  public _selectedPhoto: string;
  public selectedPlace: BehaviorSubject<google.maps.places.PlaceResult> = new BehaviorSubject<google.maps.places.PlaceResult>(this.selected);
  public selectedPhoto: BehaviorSubject<string> = new BehaviorSubject<string>(this._selectedPhoto);
  public currentRadius: BehaviorSubject<number> = new BehaviorSubject<number>(this._radius);

  constructor(private geolocator: Geolocation, 
              private mapsApiLoader: MapsAPILoader, 
              private platform: Platform) {
  }

  /** PUBLIC METHODS **/
  public async initialize(mapRef: ElementRef, searchInput: HTMLInputElement): Promise<void> {
    await this.mapsApiLoader.load();
      this.getCurrentLocation();

      setTimeout(() => {
        //initialize map
        this.initMap(mapRef);

        //new geocoder
        this.initGeocoder();

        //new directionsService
        this.initDirections();

        //new placesService
        this.initPlacesService();

        //new autocomplete listener tied to search input
        this.initAutocomplete(searchInput);

        //perform nearby search
        this.loadCafes();
      }, 225);
  }

  public async loadCafes(): Promise<void> {
    //console.log('search center: ' + this.center);
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

  public async getCurrentLocation(): Promise<void> {
    if (this.platform.is('cordova')) await this.getNativeLocation();
    else await this.getBrowserLocation();
  }
  /** END PUBLIC METHODS **/


  /**************************************************************************************/


  /** PRIVATE METHODS **/

  /** GOOGLE MAPS API INITIALIZATION METHODS **/
  private initMap(mapRef: ElementRef): void {
    //console.log('initmap center: ' + this.center.lat() + ', ' + this.center.lng());
    this.map = new google.maps.Map(mapRef.nativeElement, { center: this.center, zoom: this.zoom });
  }

  private initGeocoder(): void { 
    this.geocoder = new google.maps.Geocoder();
    console.log('Geocoder initialized');
  }

  private initPlacesService(): void {
    this.placesService = new google.maps.places.PlacesService(this.map);
    console.log('Places initialized');
  }

  private initAutocomplete(input: HTMLInputElement): void {
    this.autocomplete = new google.maps.places.Autocomplete(input, { types: ["address"] });
    
    google.maps.event.addListener(this.autocomplete, "place_changed", () => {
      //get the place result
      const place = this.autocomplete.getPlace();
      //verify result
      if (place.geometry === undefined || place.geometry === null)  return;

      else console.log(`place: { ${place.geometry.location.position.lat()}, ${place.geometry.location.poistion.lng()} }`);
    });
    console.log('Autocomplete initialized');
  }

  private initDirections(): void {
    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer();
    console.log('Directions initialized')
  }
  /** END GOOGLE MAPS API INITIALIZATION METHODS **/


  /** GOOGLE API METHODS **/
  private createMarker(index: number): void {
    const loc = { lat: this.allDetails[index].geometry.location.lat(), lng: this.allDetails[index].geometry.location.lng() };
    console.log('loc: ', loc);

    const marker = new google.maps.Marker({ map: this.map, position: loc });

    google.maps.event.addListener(marker, 'click', (event) => {
      this.map.panTo(marker.getPosition());
      console.log('place: ', loc);
      
      console.log('marker: ' + marker.position.lat() + ', ' + marker.position.lng());
      this.selectShop(this.allDetails[index]);
    });

    this.allMarkers.push(marker);
    console.log('new marker added: ', marker);
  }

  private getPlaceDetails(place: google.maps.places.PlaceResult): void {
    const detailRequest: google.maps.places.PlaceDetailsRequest = { placeId: place.place_id, fields: DETAIL_FIELDS };

    this.placesService.getDetails(detailRequest, (p: google.maps.places.PlaceResult, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        this
        //this._selectedPhoto = p.photos[0].getUrl({ maxWidth: 640 });
        //console.log(this._selectedPhoto);
        console.dir(p);
        this.allDetails.push(p);
      }
    });
  }

  getPlacePhoto(place: google.maps.places.PlaceResult) {
    let opts: google.maps.places.PhotoOptions = {
      maxWidth: 640
    };

    this._selectedPhoto = place.photos[0].getUrl(opts);
    this.selectedPhoto.next(this._selectedPhoto);


  }
  /** END GOOGLE API METHODS **/


  /** IONIC NATIVE GEOLOCATION PLUGIN **/
  private async getNativeLocation(): Promise<void> {
    console.log('%c Cordova', 'color: #ff0000;');
    try {
      await this.platform.ready();
      const position = await this.geolocator.getCurrentPosition(this.options);
      this.center = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    }
    catch(e) { console.log('native location error: ', e) }
  }


  /** BROWSER GEOLOCATION **/
  private async getBrowserLocation(): Promise<void> {
    const success = (position) => { 
      console.log('initialpos: ', position.coords);
      this.center = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    }

    const error = (error) => { console.log('currentLocation error: ', error) }

    try { await navigator.geolocation.getCurrentPosition(success, error, this.options) }
    catch(e) { console.log('navigator error: ', e) }
  }
  /** END PRIVATE METHODS **/
}
