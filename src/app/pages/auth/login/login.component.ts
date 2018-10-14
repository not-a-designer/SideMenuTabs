import { Component }      from '@angular/core';
//import { Router }      from '@angular/router';

import { Platform }    from '@ionic/angular';

import { fade }        from '@app-animations/fade.animation';


@Component({
  selector: 'login-cmp',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [ fade ]
})
export class LoginComponent {

  constructor(private platform: Platform/*, private router: Router*/) { }

  get isAndroid(): boolean { return this.platform.is('android') }

  
}
