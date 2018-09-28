import { Injectable, ElementRef } from '@angular/core';

import { MapsAPILoader }          from '@agm/core';

import { BehaviorSubject }        from 'rxjs';

declare const google: any;
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

  allCafes = [];
  allMarkers = [];
  allDetails = [];

  selected: google.maps.places.PlaceResult = null;
  selectedPlace: BehaviorSubject<google.maps.places.PlaceResult> = new BehaviorSubject<google.maps.places.PlaceResult>(this.selected);

  constructor(private mapsApiLoader: MapsAPILoader) {
  }

  initMap(mapRef: ElementRef, searchInput: HTMLInputElement) {

    this.mapsApiLoader.load().then(() => {

      navigator.geolocation.getCurrentPosition((location) => {

        console.log(location);
        const center = new google.maps.LatLng({ lat: location.coords.latitude, lng: location.coords.longitude });

        this.loadServices();

        this.map = new google.maps.Map(mapRef.nativeElement, {
          center: center,
          zoom: 13
        },
        (error) => console.log(error),
        this.options);

        this.initPlacesService();
        this.initAutocomplete(searchInput);
        //this.infoWindow = new google.maps.InfoWindow();
        this.loadCafes(center);
      });
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

  loadCafes(center) {
    const request = {
      location: center,
      radius: 5500,
      name: 'Colectivo'
    };

    this.placesService.nearbySearch(request, (results: google.maps.places.PlaceResult[], status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log('results: ' + results.length);
        this.allCafes = results;

        for (let cafe of this.allCafes) { this.getPlaceDetails(cafe) }
        setTimeout(() => {
          for (let d of this.allDetails) { this.createMarker(this.allDetails.indexOf(d)) }
        }, 300);
      }
      else console.log('nearby search error');
    });
  }

  createMarker(index: number) {
    const loc = { lat: this.allCafes[index].geometry.location.lat(), lng: this.allCafes[index].geometry.location.lng() };

    const marker = new google.maps.Marker({ map: this.map, position: loc });

    marker.addListener('mousedown', (event) => {
      this.map.panTo(marker.getPosition());
      console.log('place: ' + this.allCafes[index].geometry.location.lat() + ', ' + this.allCafes[index].geometry.location.lng());
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
        console.log(p);
        this.allDetails.push(p);
      }
    });
  }
}
