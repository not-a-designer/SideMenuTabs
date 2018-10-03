import { Component } from '@angular/core';
import { Router }    from '@angular/router';


@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage {

  constructor(private router: Router) {}

  public toAboutPage() {
    this.router.navigateByUrl('/about');
  }
  public toSettingsPage() {
    this.router.navigateByUrl('/settings');
  }
}
