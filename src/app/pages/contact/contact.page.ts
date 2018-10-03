import { Component } from '@angular/core';
import { Router }    from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})
export class ContactPage {

  constructor(private router: Router) {}

  public toAboutPage(): void { this.router.navigateByUrl('/about') }

  public toSettingsPage(): void { this.router.navigateByUrl('/settings') }
}
