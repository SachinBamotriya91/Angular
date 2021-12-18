import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  router!: Router;
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      let bReturn=true;
      if(localStorage.getItem('isLoggedIn')=='false'){
        alert("Please Login First");
        this.router.navigate(['/login']);
  
        bReturn=false;
      }
      return bReturn;
  }
  
}
