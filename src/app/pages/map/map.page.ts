

import { Component, 
         ElementRef, 
         Inject,
         OnInit, 
         AfterViewInit,
         ViewChild }         from '@angular/core';
import { DOCUMENT }          from '@angular/common';
import { Router }            from '@angular/router';

import { ModalController, Platform } from '@ionic/angular';

import { fadeIn }            from '@app-animations/fade.animation';
import { AuthService }       from '@app-services/auth/auth.service';
import { GoogleMapsService } from '@app-services/google-maps/google-maps.service';
import { User }              from '@app-interfaces/user';


declare const google: any;


@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
  animations: [ fadeIn ]
})
export class MapPage implements OnInit, AfterViewInit {

  public user: User;
  @ViewChild('map') private map: ElementRef;

  public lat: number = 43.1506;
  public lng: number = -87.9579;
  public zoom: number = 13;

  public showToggles: boolean = false;
  public viewMode: string = 'map';

  constructor(@Inject(DOCUMENT) private document: Document,
              private auth: AuthService, 
              private googleMaps: GoogleMapsService,
              private router: Router, 
              private platform: Platform,
              private modalCtrl: ModalController) {}

  public async ngOnInit() {
    this.auth.user$.subscribe((u) => {
      if (u) this.user = u;
      else this.user = null;
    });
  }

  public async ngAfterViewInit(): Promise<void> {
    try {
      //await this.platform.ready();
      //const input = <HTMLInputElement>this.document.getElementById('search').getElementsByTagName('input')[0];
      //this.googleMaps.initAutocomplete(input);
      /**if (this.platform.is('cordova')) await this.googleMaps.getNativeLocation();
      else await this.googleMaps.getBrowserLocation();
      console.log('center: ', this.googleMaps.center);
      await this.googleMaps.browserMapInit(this.map, input);*/
    }
    catch(e) { console.log('ngAfterInit() error: ', e) }
  }

  public toggleRadius(): void { this.showToggles = !this.showToggles }

  public loadCoffeeshops(filter?: any): void { 
    //this.locations = this.firestore.loadColectivo();
  }

  async segmentChanged(event) {
    console.log('segment changed: ', event.detail.value);
    if (await this.modalCtrl.getTop() != undefined) await this.modalCtrl.dismiss();
    console.log('width: ',this.platform.width())
  }

  
}
