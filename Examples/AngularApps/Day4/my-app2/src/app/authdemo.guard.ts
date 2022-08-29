import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthdemoGuard implements CanActivate {
  constructor(private _router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
    {
    // if true then it allows you to route to the components else not
    let loggedInUser = route.paramMap.get('user');
    let sessionUser = sessionStorage.getItem('userKey'); 
    console.log('Logging User: ', loggedInUser, ', Session User: ', sessionUser);
    if(loggedInUser == sessionUser) {
      return true; 
    } else {
      alert('You have to login first');
      this._router.navigate(['login']);
      return false;
    }
  }
  
}
