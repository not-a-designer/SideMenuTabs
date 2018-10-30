import { Component, 
         NgZone, 
         OnInit }      from '@angular/core';
import { Router }      from '@angular/router';

import { AlertController, 
         LoadingController, 
        Platform }     from '@ionic/angular';

import { AuthService } from '@app-services/auth/auth.service';
import { User }        from '@app-interfaces/user';
import { Observable }  from 'rxjs';

import * as moment     from 'moment'


@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
})
export class SettingsPage implements OnInit {

  public user: User;

  constructor(private auth: AuthService, 
              private router: Router,
              private zone: NgZone,
              private alertCtrl: AlertController,
              private loadingCtrl: LoadingController,
              private platform: Platform) { }

  public ngOnInit(): void {
    console.log('checking for user...');
    this.auth.user$.subscribe(u => {
      if (u) this.user = u;
    });
  }

  public async presentSignOutAlert(): Promise<void> {
    try {
      const alert = await this.alertCtrl.create({
        header: 'Sign out',
        message: 'Are you sure?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('cancel log out');
            }
          }, {
            text: 'Logout',
            handler: () => {
              this.zone.run(() => {
                console.log('Confirm Okay');
                this.signOut();
                if (this.platform.is('cordova')) this.auth.googleSignOut();
              })
              
            }
          }
        ]
      });
      await alert.present();
    }
    catch(e) { console.log(e) }
  }

  private async signOut(): Promise<void> {
    const loader = await this.loadingCtrl.create({ message: 'signing out...' });
    await loader.present();

    this.router.navigate(['/']);
    this.auth.signOut();
    await loader.dismiss();
  }

  get isAndroid(): boolean { return this.platform.is('android') }

  getMaxAge(): string { return moment().subtract(18, 'years').format('YYYY-MM-DD') }
}
