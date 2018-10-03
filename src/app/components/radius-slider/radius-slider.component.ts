import { Component, OnInit } from '@angular/core';

import { GoogleMapsService } from '@app-services/google-maps.service';


@Component({
  selector: 'radius-slider',
  templateUrl: './radius-slider.component.html',
  styleUrls: ['./radius-slider.component.scss']
})
export class RadiusSliderComponent implements OnInit {

  public radius: number;

  constructor(private googleMaps: GoogleMapsService) { }

  public ngOnInit(): void {
    this.googleMaps.currentRadius.subscribe((rad) => this.radius = rad);
  }

  public setRadius(rad: number): void {
    if (rad < 1600 || rad > 16000) return;
    else this.googleMaps.setRadius(rad);
  }

}
