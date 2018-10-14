import { Component, 
         OnInit, 
         ViewChild }           from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

import { Tabs }                from '@ionic/angular';

import { last }                from 'rxjs/operators';

import { AuthService }         from '@app-services/auth/auth.service';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  @ViewChild('mainTabs') 
  public mainTabs: Tabs;

  public authStatus: boolean = false

  constructor(private auth: AuthService, private router: Router) {}

  public ngOnInit(): void {
    this.auth.user$.subscribe((u) => {
      this.authStatus = u ? true : false;
      console.log('tabs|logged in: ', this.authStatus);
    });
    this.router.events.pipe(last())
      .subscribe((event: RouterEvent) => {
        console.log('navigationEnd, ', event.url)
      })
  }
}
