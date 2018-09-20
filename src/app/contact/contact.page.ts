import { Component } from '@angular/core';

import { Router }    from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})
export class ContactPage {

  constructor(private router: Router) {}

  toAboutPage() {
    this.router.navigateByUrl('/about');
  }
  toSettingsPage() {
    this.router.navigateByUrl('/settings');
  }
}
