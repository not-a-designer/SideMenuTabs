
import { Injectable }      from '@angular/core';
import { CanActivate,
         ActivatedRouteSnapshot, 
         RouterStateSnapshot,
         Router }          from '@angular/router';

import { Observable }      from 'rxjs';
import { map, take, tap }  from 'rxjs/operators'

import { AuthService }     from '@app-services/auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  

  constructor(private auth: AuthService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return 
  }
}
