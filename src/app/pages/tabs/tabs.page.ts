import { ChangeDetectorRef, 
         Component, 
         OnInit, 
         ViewChild }            from '@angular/core';
import { Router, RouterEvent }   from '@angular/router';

import { Tabs, ModalController } from '@ionic/angular';

import { last }                  from 'rxjs/operators';

import { AuthService }           from '@app-services/auth/auth.service';
import { GoogleMapsService }     from '@app-services/google-maps/google-maps.service';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  @ViewChild('mainTabs') 
  public mainTabs: Tabs;

  public authStatus: boolean = false;

  currentUrl: any;

  constructor(private auth: AuthService, 
              private googleMaps: GoogleMapsService,
              private router: Router, 
              private cdr: ChangeDetectorRef,
              private modalCtrl: ModalController) {}

  public ngOnInit(): void {
    this.auth.user$.subscribe((u) => {
      this.authStatus = u ? true : false;
      console.log('tabs|logged in: ', this.authStatus);
    });
    this.router.events.pipe(last())
      .subscribe((event: RouterEvent) => {
        this.currentUrl = event.url
        //console.log(event);
        console.log('navigationEnd, ', this.currentUrl);
        this.cdr.detectChanges();
      });
  }

  public async logTabs(event) {
    if (await this.modalCtrl.getTop() != undefined) await this.modalCtrl.dismiss();
    console.log(event);
    try {
      const selectedTab = await this.mainTabs.getSelected()
      if (selectedTab) console.log(selectedTab.title);
    }
    catch(e) { console.log('selectedTab() error: ', e) }
  }

  public async logCurrentTab(event) {
    try {
      const currentTab = await this.mainTabs.getSelected();
      if (currentTab) console.log(currentTab.title);
    }
    catch(e) { console.log('currentTab() error: ', e) }
  }
}
