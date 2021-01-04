import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TodoGuardGuard implements CanActivate {
  isResult;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      let result = localStorage.getItem('user');
      if(result !== ''){
        this.isResult = true;
      }else {
        this.isResult = false;
      }

    return this.isResult;
  }

}
