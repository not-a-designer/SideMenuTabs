import { fadeIn } from '@app-animations/fade.animation';
import { Component, 
         ElementRef,
         Inject,
         AfterViewInit, 
         ViewChild } from '@angular/core';
import { DOCUMENT }  from '@angular/common';

import { Platform }  from '@ionic/angular';

import { GoogleMapsService } from '@app-services/google-maps/google-maps.service';


declare const google: any;


@Component({
  selector: 'map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
  animations: [ fadeIn ]
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild('map') private map: ElementRef;

  public lat: number = 43.1506;
  public lng: number = -87.9579;
  public zoom: number = 13;

  constructor(@Inject(DOCUMENT) private document: Document,
              private platform: Platform,
              private googleMaps: GoogleMapsService) { }

  ngOnInit() {
  }

  public async ngAfterViewInit(): Promise<void> {
    try {
      //const input = this.document.getElementById('search').getElementsByTagName('input')[0];

      //if (this.platform.is('cordova')) await this.googleMaps.getNativeLocation();
      //else await this.googleMaps.getBrowserLocation();
      //console.log('center: ', this.googleMaps.center);
      //await this.googleMaps.browserMapInit(this.map/*, input*/);
      //this.googleMaps.initAutocomplete(input);
    }
    catch(e) { console.log('ngAfterInit() error: ', e) }
  }

  


}
