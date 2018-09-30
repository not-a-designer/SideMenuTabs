import { Component, OnInit } from '@angular/core';

import { GoogleMapsService } from '@app-services/google-maps.service';


@Component({
  selector: 'radius-slider',
  templateUrl: './radius-slider.component.html',
  styleUrls: ['./radius-slider.component.scss']
})
export class RadiusSliderComponent implements OnInit {

  radius: number;

  constructor(private googleMaps: GoogleMapsService) { }

  ngOnInit() {
    this.googleMaps.currentRadius.subscribe((rad) => {
      this.radius = rad;
      console.log(this.radius);
    });
  }

  setRadius(rad: number) {
    if (rad < 1600 || rad > 16000) return;

    else {
      this.googleMaps.setRadius(rad);
      //this.googleMaps.loadCafes(this.googleMaps.getCurrentLocation());
    }
  }

}
