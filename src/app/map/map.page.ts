import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage {

  mapView: string = 'agm';

  constructor(private router: Router) {}

  toAboutPage() {
    this.router.navigateByUrl('/about');
  }
  toSettingsPage() {
    this.router.navigateByUrl('/settings');
  }

  segmentChanged(event: any) {
    console.log(event);
  }
}
