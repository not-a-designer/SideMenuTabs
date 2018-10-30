import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { AuthService }       from '@app-services/auth/auth.service';
import { User }              from '@app-interfaces/user';


export const COFFEE: string = 'coffee';
export const SHOPS: string = 'coffeeshops';
export const VENUES: string = 'venues';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  user: User = null;
  viewMode: string = 'coffee';

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.auth.user$.subscribe((u) => {
      if (u) this.user = u;
      else this.user = null;
    });
  }
  
  navigateTo(list: string, mode: string) {
          this.router.navigateByUrl(`/tabs/search/${list}/${mode})`, { skipLocationChange: true });
  }
}
