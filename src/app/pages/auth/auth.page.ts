import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Platform }               from '@ionic/angular';

import { AuthService }            from '@app-services/auth/auth.service';
import { FirestoreService }       from '@app-services/firestore/firestore.service';
import { User }                   from '@app-interfaces/user';
import { autoHeight }             from '@app-animations/auto-height.animation';
import { fade }                   from '@app-animations/fade.animation';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  animations: [ autoHeight, fade ]
})
export class AuthPage implements OnInit {

  public authMode: string = 'login';
  public user: User;

  constructor(private auth: AuthService, 
              private firestore: FirestoreService,
              private route: ActivatedRoute,
              private router: Router,
              private platform: Platform) { }

  public ngOnInit(): void {
    this.auth.user$.subscribe((u) => {
      if (u) this.router.navigate(['/']);
    })
  }

  public toggleMode(): void {
    this.authMode = this.authMode == 'login' ? 'register' : 'login';
  }

  public async googleLogin(): Promise<void> {
    if (this.platform.is('cordova')) {
      try {
        const credential = await this.auth.googleNativeLogin();
        if (credential.user) {
          console.log('user: ', credential.user);
          this.router.navigate(['/']);
        }
        else console.log('user error');
        
      }
      catch(e) { console.log('googleNativeLogin() error: ', e.message) }
    }
    else {
      try {
        const credential = await this.auth.googleBrowserLogin();
        if (credential.user) {
          console.log('user: ', credential.user);
          this.router.navigate(['/']);
        }
        else console.log('user error');
        
      }
      catch(e) { console.log('googleBrowserLogin() error: ', e.message) }
    }
  }

  /*public async emailLogin(email: string, password: string): Promise<void> {
    if (this.validEmailLogin(email, password)) {
      try {
        await this.auth.emailLogin(email, password);
      }
      catch(e) { console.log('emailLogin error: ', e) }
    }
  }*/

  public async register(email: string, password: string, confirm: string): Promise<void> {
    if (this.validateRegistration(email, password, confirm)) {
      try{
        const userCredential: firebase.auth.UserCredential = await this.auth.register(email, password);
        this.firestore.updateUser(userCredential.user);
      }
      catch(e) { console.log('register error ', e) }
    }
    
  }

  private validateRegistration(email: string, password: string, confirm: string): boolean {
    if (!email || !password || !confirm) return false;
    else if (email.trim().length < 6 || password.trim().length < 8 || confirm.trim().length < 8) return false;
    else if (password !== confirm) return false;

    else return true;
  }




}
