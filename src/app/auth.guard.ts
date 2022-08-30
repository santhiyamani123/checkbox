import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  // a =0;
  // b =0;
  userToken = true;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     

    //call an HTTP call to bandend API  and get Auth Token for User

    this.userToken = true;

      // this.a=100;
      // this.b=20;

      if(this.userToken)
      {
        return true;
      }
      else
      {
        return false;
      }
      
  }
  
}
