import { Component, OnInit } from '@angular/core';

import { GoogleMapsService } from '@app-services/google-maps/google-maps.service';


@Component({
  selector: 'radius-slider',
  templateUrl: './radius-slider.component.html',
  styleUrls: ['./radius-slider.component.scss']
})
export class RadiusSliderComponent implements OnInit {

  public radius: number;

  constructor(private googleMaps: GoogleMapsService) { }

  public ngOnInit(): void {
    this.googleMaps.currentRadius.subscribe((rad) => {
      console.log(rad);
      this.radius = rad;
    });
  }

  public setRadius(): void { this.googleMaps.setRadius(this.radius) }
}
