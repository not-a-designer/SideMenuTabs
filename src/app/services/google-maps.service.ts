import { Injectable, ElementRef } from '@angular/core';

import { MapsAPILoader }            from '@agm/core';

import { Platform }                 from '@ionic/angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';

import { BehaviorSubject }          from 'rxjs';

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

  map: any;
  //infoWindow: any;
  autocomplete: any;
  directionsService: any;
  directionsDisplay: any;
  placesService: any;
  geocoder: any;
  

  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  //allCafes = [];
  allMarkers = [];
  allDetails = [];

  center: google.maps.LatLng = null;

  private _radius: number = 2300;
  zoom: number = 13;


  selected: google.maps.places.PlaceResult = null;
  selectedPlace: BehaviorSubject<google.maps.places.PlaceResult> = new BehaviorSubject<google.maps.places.PlaceResult>(this.selected);
  currentRadius: BehaviorSubject<number> = new BehaviorSubject<number>(this._radius);

  constructor(private geolocator: Geolocation, 
              private mapsApiLoader: MapsAPILoader, 
              private platform: Platform) {
  }

   initialize(mapRef: ElementRef, searchInput: HTMLInputElement) {
    
    this.mapsApiLoader.load().then(async () => {

      

      if (this.platform.is('cordova')) {
        this.center = await this.getNativeLocation();
        this.initMap(mapRef);
        console.log('center = ' + this.center);
        this.loadServices();
        this.initPlacesService();

        this.initAutocomplete(searchInput);

        setTimeout(() => { this.loadCafes() }, 2000);
      } 
      else {
        navigator.geolocation.getCurrentPosition((position) => {
          this.center = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
          this.initMap(mapRef);
          console.log('center = ' + this.center);
          this.loadServices();
          this.initPlacesService();

          this.initAutocomplete(searchInput);

          /*setTimeout(() => { */this.loadCafes() //}, 500);

        },

        (error) => console.log('navigator error ', error),

        this.options);
      }
    });
  }

  initMap(mapRef: ElementRef) {
    this.map = new google.maps.Map(mapRef.nativeElement, {
      center: this.center,
      zoom: this.zoom
    });
  }

  loadServices() {
    this.initGeocoder();
    this.initDirections();
  }

  initAutocomplete(input: HTMLInputElement) {
    this.autocomplete = new google.maps.places.Autocomplete(input, { types: ["address"] });
    console.log('Autocomplete initialized');
    
    google.maps.event.addListener(this.autocomplete, "place_changed", () => {
      //get the place result
      const place = this.autocomplete.getPlace();
      //verify result
      if (place.geometry === undefined || place.geometry === null)  return;

      else {
        console.log(`place: { ${place.geometry.location.position.lat()}, ${place.geometry.location.poistion.lng()} }`);
      }
    });
  }

  initGeocoder() { 
    this.geocoder = new google.maps.Geocoder();
    console.log('Geocoder initialized');
  }

  initDirections() {
    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer();
    console.log('Directions initialized')
  }

  initPlacesService() {
    this.placesService = new google.maps.places.PlacesService(this.map);
    console.log('Places initialized');
  }

  async loadCafes() {
    console.log('search center: ' + this.center);

    const request: google.maps.places.PlaceSearchRequest = {
      location: new google.maps.LatLng(this.center.lat(), this.center.lng()),
      radius: this._radius,
      name: 'Colectivo'
    };

    console.log({ request });
    this.placesService.nearbySearch(request, (results: google.maps.places.PlaceResult[], status) => {
      console.log({ request, results, status })
      //console.dir('status', status);
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log('results: ' + results.length);

        for (let cafe of results) { this.getPlaceDetails(cafe) }

        setTimeout(() => {
          for (let d of this.allDetails) { 
            this.createMarker(this.allDetails.indexOf(d)) 
            console.log('loc: ', d.name);
          }
        }, 100);

      }
      else console.log('nearby search error');
    });
  }

  createMarker(index: number) {
    const loc = { lat: this.allDetails[index].geometry.location.lat(), lng: this.allDetails[index].geometry.location.lng() };
    console.log('loc: ', loc);

    const marker = new google.maps.Marker({ map: this.map, position: loc });

    marker.addListener('mousedown', (event) => {
      this.map.panTo(marker.getPosition());
      console.log('place: ', loc);
      console.log('marker: ' + marker.position.lat() + ', ' + marker.position.lng());
      this.selected = this.allDetails[index];
      this.selectedPlace.next(this.allDetails[index]);
    });

    this.allMarkers.push(marker);
  }

  getPlaceDetails(place: google.maps.places.PlaceResult) {
    const detailRequest: google.maps.places.PlaceDetailsRequest = { placeId: place.place_id, fields: DETAIL_FIELDS };

    this.placesService.getDetails(detailRequest, (p: google.maps.places.PlaceResult, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.dir(p);
        this.allDetails.push(p);
      }
    });
  }

  setRadius(rad: number) { 
    this._radius = rad;
    this.currentRadius.next(this._radius);
    this.loadCafes();
    console.log(this._radius);
  }

  async getNativeLocation(): Promise<google.maps.LatLng> {
    console.log('%c Cordova', 'color: #ff0000;');
    await this.platform.ready();
    const position = await this.geolocator.getCurrentPosition(this.options);
    return  new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  }
}
