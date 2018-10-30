import { Component,
         ElementRef,
         EventEmitter, 
         Output, 
         ViewChild}    from '@angular/core';
//import { Router }      from '@angular/router';

import { Platform, Button } from '@ionic/angular';

import { fade }     from '@app-animations/fade.animation';


const EMAIL_REGEXP: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


@Component({
  selector: 'login-cmp',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [ fade ]
})
export class LoginComponent {

  @Output('onLoginInput')
  onLoginInput: EventEmitter<{ email: string, password: string}> = new EventEmitter<{ email: string, password: string}>();

  @ViewChild('email') emailInput: HTMLInputElement;
  @ViewChild('password') passwordInput: HTMLInputElement;

  email: string;
  password: string;

  public emailFocus: boolean = false;
  public passwordFocus: boolean = false;

  passwordVisible: boolean = false;

  constructor(private platform: Platform/*, private router: Router*/) {}

  emailChanged(event) {
    console.log(event);
  }
  
  emitLoginInput() {
    if (this.validEmailLogin(this.email, this.password)) {
      try {
        this.onLoginInput.next({ email: this.email, password: this.password });
      }
      catch(e) { console.log('emailLogin error: ', e) }
    }
  }

  private validEmailLogin(email: string, password: string) {
    if (!email || !password) return false;
    else if (email.trim().length < 6 || password.trim().length < 8) return false;
    else if(EMAIL_REGEXP.test(email.trim())) return false;
    else return true;

  }

  get isAndroid(): boolean { return this.platform.is('android') }

  
}
