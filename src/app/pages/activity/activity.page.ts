import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { AuthService }       from '@app-services/auth/auth.service';
import { User }              from '@app-interfaces/user';


@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit {

  public user: User = null;
  public viewMode: string = 'nearby';

  constructor(private auth: AuthService, private router: Router) { }

  public ngOnInit(): void {
    this.auth.user$.subscribe((u) => {
      if (u) this.user = u;
      else this.user = null;
    });
  }

  segmentChanged(event) {
    console.log(event);
  }

}
