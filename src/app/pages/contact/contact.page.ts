import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';

import { AuthService }         from '@app-services/auth/auth.service';
import { User }                from '@app-interfaces/user';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})
export class ContactPage implements OnInit {

  public user: User = null;
  //public user$: Observable<User>;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.auth.user$.subscribe((u) => {
      if (u) {
        console.log('contacpage user-found: ', u);
        this.user = u;
      }
      else this.user = null;
    });
  }
}
