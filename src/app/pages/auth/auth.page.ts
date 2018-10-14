import { Component }              from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService }            from '@app-services/auth/auth.service';
import { FirestoreService }       from '@app-services/firestore.service';
import { User }                   from '@app-interfaces/user';
import { autoHeight }             from '@app-animations/auto-height.animation';
import { fade }                   from '@app-animations/fade.animation';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  animations: [ autoHeight, fade ]
})
export class AuthPage {

  public authMode: string = 'login';
  returnUrl: string;
  public user: User;

  constructor(private auth: AuthService, 
              private firestore: FirestoreService,
              private route: ActivatedRoute,
              private router: Router) { }

  public toggleMode(): void {
    this.authMode = this.authMode == 'login' ? 'register' : 'login';
  }

  public async googleLogin(): Promise<void> {
    
    try {
      console.log('return: ', this.returnUrl)
      const credential = await this.auth.googleLogin();
      console.log('cred: ', credential);
      this.router.navigateByUrl(this.returnUrl);
      
    }
    catch(e) { console.log('googleLogin() error: ', e) }
  }

  public async emailLogin(email: string, password: string): Promise<void> {
    try {
      await this.auth.emailLogin(email, password);
    }
    catch(e) { console.log('emailLogin error: ', e) }
  }

  public async register(email: string, password: string, confirm: string): Promise<void> {
    try{
      if (this.validateRegistration(email, password, confirm)) {
        const userCredential: firebase.auth.UserCredential = await this.auth.register(email, password);
        this.firestore.updateUser(userCredential.user);
        
      }
    }
    catch(e) { console.log('register error ', e) }
  }

  private validateRegistration(email: string, password: string, confirm: string): boolean {
    if (!email || !password || !confirm) return false;
    else if (email.trim().length < 6 || password.trim().length < 8 || confirm.trim().length < 8) return false;
    else if (password !== confirm) return false;

    else return true;
  }




}
