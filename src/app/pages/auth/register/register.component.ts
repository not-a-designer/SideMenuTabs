import { Component } from '@angular/core';

import  { Platform } from '@ionic/angular';

import { fade }      from '@app-animations/fade.animation';


@Component({
  selector: 'register-cmp',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [ fade ]
})
export class RegisterComponent {

  constructor(private platform: Platform) { }

  get isAndroid(): boolean { return this.platform.is('android') }
}
